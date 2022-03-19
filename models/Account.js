require("dotenv").config();
const db = require("../config/db/index.js");
const connectAccount = db.connects(ACCOUNT_URI);
const mongoose = require("mongoose");
const Account = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    min: [6, "Password invalid !"]
  },
  id: {
    type: String,
    unique: true,
    default: null
  }
})

module.exports = connectAccount.models("account", Account)
