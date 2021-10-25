const express = require("express");
const router = express.Router();

//!intakes routes - file name = route name
router.use(require("./candidateRoutes"));
router.use(require("./partyRoutes"));
router.use(require("./voterRoutes"));
router.use(require("./voteRoutes"));

//Exports router to server
module.exports = router;
