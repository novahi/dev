class RegisterController {
  get(req, res) {
    res.render("authentication/register.hbs")
  }
  post(req, res) {
    
  }
}
module.exports = new RegisterController()
