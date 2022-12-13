require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const blogRouter = require("./routes/blog.routes");
const {authMiddleware} = require("./middlewares/auth")




app.use(cors());
app.use(express.json());
app.use(authMiddleware)
app.use("/user", userRouter);
app.use("/blog",blogRouter)

const port = 8080;
app.listen(port, async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, () => {
      console.log("DB connection established");
    });
    console.log("server listening on port " + port);
  } catch (error) {
    console.log(error.message);
  }
});
