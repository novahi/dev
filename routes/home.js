const express = require('express');
const router = express.Router();
const homeController = require("/controllers/HomeController.js");
/* GET users listing. */
router.get('/', homeController.get);

module.exports = router;
