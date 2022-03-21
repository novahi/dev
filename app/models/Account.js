require("dotenv").config()
const mongoose = require("mongoose");
// const connect = mongoose.createConnection(process.env.ACCOUNT_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
const db = require("../config/db")
const connect = db.connects(process.env.ACCOUNT_URI)
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

module.exports = connect.model("account", Account)
