const express = require("express");
const router = express.Router();

//!intakes routes - file name = route name
//4 empty routes
router.use(require("./"));
router.use(require("./"));
router.use(require("./"));
router.use(require("./"));

//Exports router to server
module.exports = router;
