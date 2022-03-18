class LoginController {
  get(req, res) => {
    res.render("authentication/login")
  }
}
module.export = new LoginController()
