class UploadController {
  get(req, res) {
    res.render("tools/upload.hbs")
  }
}
module.export = new UploadController()
