const express = require("express");
// const { signup } = require("../controllers/user.controller");
const router = express.Router();
const {signup } = require("../controllers/user.controller");
router.route("/signup").post(signup);

module.exports = router;
