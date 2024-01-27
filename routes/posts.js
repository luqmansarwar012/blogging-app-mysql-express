const express = require("express");
const {
  createPost,
  getPostById,
  getAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.post("/create", createPost);
router.get("/get", getAllPosts);
router.get("/get/:postId", getPostById);
router.patch("/update/:postId", updatePost);
router.delete("/delete/:postId", deletePost);

module.exports = router;
