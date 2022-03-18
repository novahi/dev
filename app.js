const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const route = require("./routes");
const app = express();
const cloudinary = require("cloudinary");

require("dotenv").config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOADINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// view engine setup
app.engine("hbs", handlebars({
  extname: ".hbs",
  helpers: {
    // tool use with handlebars
  }
}))
app.set("view engine", "handlebars");
app.set("views", "./views")

app.static()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

route(app);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
