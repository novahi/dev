class LoginController {
  get(req, res) {
    res.render("authentication/login.hbs")
  }
}
module.export = new LoginController()
