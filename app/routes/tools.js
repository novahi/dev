const express = require('express');
const router = express.Router();
const toolsController = require("../controllers/ToolsControllers.js");

router.get('/', toolsController.getIG);
router.post("/", toolsController.postIG)

module.exports = router;
