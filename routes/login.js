const express = require('express');
const router = express.Router();
const loginController = require("../controllers/LoginController.js")

router.get('/', loginController.get);

module.exports = router;
