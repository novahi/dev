class RegisterController {
  get(req, res) => {
    res.render("authentication/register")
  }
  post(req, res) {
    
  }
}
module.export = new RegisterController()
