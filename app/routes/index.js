const express = require('express');
const router = express.Router();
const homeRouter = require("./home");
const uploadRouter = require("./upload");
const loginRouter = require("./login");
const registerRouter = require("./register");

function route(app) {
  app.use("/upload", uploadRouter);
  app.use("/login", loginRouter);
  app.use("/register", registerRouter);
  app.use("/", homeRouter)
}
module.exports = route;
