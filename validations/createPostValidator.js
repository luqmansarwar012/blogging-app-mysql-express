// validation.js
const { body, validationResult } = require("express-validator");

const createPostValidation = [
  body("title").notEmpty().withMessage("Title cannot be empty"),
  body("content").notEmpty().withMessage("Content cannot be empty"),
  body("imageUrl").notEmpty().withMessage("Image URL cannot be empty"),
  body("categoryId").isInt().withMessage("Category ID must be an integer"),
  body("userId").isInt().withMessage("User ID must be an integer"),
];

const createPostValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(422).json({ errors: errors.array() });
};

module.exports = {
  createPostValidator,
  createPostValidation,
};
