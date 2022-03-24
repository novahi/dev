const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { engine } = require("express-handlebars")
const db = require("./config/db");
const route = require("./routes");
const app = express();
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 3000
require("dotenv").config()
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOADINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// view engine setup
app.engine("hbs", engine({
  extname: ".hbs"
}))
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

route(app);


app.listen(PORT, async () => {
  await db.connect(process.env.USER_URI, PORT)
})
