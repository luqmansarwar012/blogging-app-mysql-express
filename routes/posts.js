const express = require("express");
const { createPost, getPostById } = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", createPost);
router.get("/get/:postId", getPostById);

module.exports = router;
