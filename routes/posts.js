const express = require("express");
const {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", createPost);
router.get("/get", getAllPosts);
router.get("/get/:postId", getPostById);
router.patch("/update/:postId", updatePost);

module.exports = router;
