const models = require("../models");
const createPost = (req, res) => {
  const { title, content, imageUrl, categoryId } = req.body;
  const post = { title, content, imageUrl, categoryId };
  // creating a post in database
  models.Post.create(post)
    .then((result) => {
      return res
        .status(201)
        .json({ message: "Post created successfully", post: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "something went wrong", error });
    });
};

module.exports = { createPost };
