const models = require("../models");

// create a post
const createPost = (req, res) => {
  const { title, content, imageUrl, categoryId } = req.body;
  const post = { title, content, imageUrl, categoryId };
  // creating a post in database
  models.Post.create(post)
    .then((result) => {
      res
        .status(201)
        .json({ message: "Post created successfully", post: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "something went wrong", error });
    });
};

// get post by id
const getPostById = (req, res) => {
  const postId = req.params.postId;
  // fetinching  post by its id
  models.Post.findByPk(postId)
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({ message: "something went wrong", error });
    });
};

// get all posts
const getAllPosts = (req, res) => {
  // fetching all the posts
  models.Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "something went wrong", error });
    });
};

module.exports = { createPost, getPostById, getAllPosts };
