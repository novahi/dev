class UploadController {
  get(req, res) => {
    res.render("tools/upload")
  }
}
module.export = new UploadController()
