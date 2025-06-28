const express = require("express");
const cors = require("cors");

const mainRouter = require("./Router/mainRouter");

const root = express();

root.use(cors());
root.use(express.json());

root.use("/api/v1", mainRouter);

root.listen(4000, (err) => {
  if (err) {
    console.log("Error in listning on server at port 4000");
  } else {
    console.log("Server is listning on port 4000");
  }
});
