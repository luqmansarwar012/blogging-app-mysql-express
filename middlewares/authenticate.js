const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const verification = jwt.verify(token, process.env.JWT_SECRET);
    if (!verification) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = {
      name: "test",
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
module.exports = { authenticate };
