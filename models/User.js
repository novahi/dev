const mongoose = requrie("mongoose");
const username = require("mongoose-slug-generator");
mongoose.plugin(username);
const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    unique: true,
    username: "name",
    min: [6, "Minimum of 6 characters"],
    max: [12, "Up to ten 12 characters"],
    required: true
  },
}, {
  timestamps: {
      currentTime: () => Date().toLocaleString("vi-VI", {
        timeZone: "Asia/Ho_Chi_Minh"
      })
    },
    versionKey: false
})


module.exports = monsooge.models("user", User)
