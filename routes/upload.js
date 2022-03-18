const express = require('express');
const router = express.Router();
const uploadController = require("../controllers/UploadControllers.js");

router.get('/', uploadController.get);

module.exports = router;
