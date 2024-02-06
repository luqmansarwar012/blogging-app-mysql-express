const express = require("express");
const { signup, login, test } = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authenticate");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/test", authenticate, test);

module.exports = router;
