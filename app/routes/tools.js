const express = require('express');
const router = express.Router();
const toolsController = require("../controllers/ToolsControllers.js");

router.get('/instagram', toolsController.getIG);
router.post("/instagram", toolsController.postIG)

module.exports = router;
