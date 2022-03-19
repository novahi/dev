const jwt = require("jsonwebtoken")
const User = require("../models/User.js")
const Account = require("../models/Account.js ")
class LoginController {
  get(req, res) {
    res.render("authentication/login.hbs")
  }
  async post(req, res) {
    try {
      let { email, password } = req.body;
      email = email.toLowerCase()
      password = password.toLowerCase()
      const data = await Account.find({})
      data ? res.status(200).json({
        "status": true,
        "data": data
      }) : res.status(404).json({
        "status": false,
      })
    } catch (e) {
      console.log(e)
      res.status(404).json({
        "status": false,
        "data": e
      })
    }
  }
}
module.exports = new LoginController()
