class homeController {
  get(req, res) => {
    res.render("home")
  }
}
module.export = new homeController()
