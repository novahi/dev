const express = require('express');
const router = express.Router();
const homeRouter = require("./home");
const toolsRouter = require("./tools");
const loginRouter = require("./login");
const registerRouter = require("./register");

function route(app) {
  app.use("/tools", toolsRouter);
  app.use("/login", loginRouter);
  app.use("/register", registerRouter);
  app.use("/", homeRouter)
}
module.exports = route;
