class homeController {
  get(req, res) {
    res.render("home.hbs")
  }
}
module.export = new homeController()
