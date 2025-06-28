/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const mongoose = require("mongoose");
const env = require("dotenv").config();
async function connect() {
  try {
    console.log(process.env.DATA_KEY);
    await mongoose.connect(process.env.DATA_KEY);
    console.log("Connnection Successfull>>>>>");
  } catch (err) {
    console.log("Error  connecting with database!");
    console.log(err);
  }
}

connect();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
 
});




module.exports.User = mongoose.model("user", userSchema);
