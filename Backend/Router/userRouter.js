/* eslint-disable @typescript-eslint/no-require-imports */
const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const { User } = require("../database");
const asyncHandler = require("express-async-handler");

async function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log(decoded.userId);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({});
  }
}
async function hashPassword(plainPassword) {
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  return await bcrypt.hash(plainPassword, salt);
}

const signUpSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});
userRouter.post(
  "/signup",
  asyncHandler(async (req, res) => {
    const { success } = signUpSchema.safeParse(req.body);

    if (!success) {
      console.log("Invalid body!");
      res.send({
        msg: "Invalid inputs.",
      });
    }

    const find = await User.findOne({
      username: req.body.username,
    });

    if (find) {
      console.log("Another user found with same username.");
      res.status(404).send({
        msg: "Username already taken!",
      });
    }
    try {
      const newuser = new User({
        username: req.body.username,
        password: await hashPassword(req.body.password),
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      });
      await newuser.save();
      const userId = newuser._id;
      console.log(userId);
      const token = jwt.sign(
        {
          userId,
        },
        JWT_SECRET
      );

      console.log("User created successfully!!");
      console.log(token);
      res.status(200).send({
        token: token,
      });
    } catch (err) {
      console.log("Error creating new user!");
      res.status(411).send({
        msg: "Error creating new user to database!",
      });
    }
  })
);

userRouter.post(
  "/signin",

  asyncHandler(async (req, res) => {
    const user = await User.findOne({
      username: req.body.username,
    });
    console.log("passpoint 1");
    if (!user) {
      console.log("User does not exist!");
      res.status(411).send({
        msg: "User not found!",
      });
    }
    console.log("passpoint 2");
    console.log(req.body.password);
    console.log(user.password);
    const verify = await bcrypt.compare(req.body.password, user.password);
    console.log(verify);
    console.log("passpoint 3");
    if (verify) {
      console.log("Verification succsess!");
      const userId = user._id;
      const token = jwt.sign(
        { userId }, // payload
        JWT_SECRET, // secret key
        { expiresIn: "1d" } // options
      );

      res.status(200).send({
        msg: "Login Succsess!",
        token: token,
      });
    } else {
      res.status(411).send({
        msg: "password not vrified!",
      });
    }
  })
);

userRouter.put("/update", auth, async (req, res) => {
  const update = await User.updateOne(
    {
      _id: req.userId,
    },
    {
      $set: req.body,
    }
  );

  if (update) {
    res.status(200).send({
      msg: "User Info Updated!!",
    });
  } else {
    req.status(411).send({
      msg: "Error occured in updating user information.",
    });
  }
});

module.exports = userRouter;
