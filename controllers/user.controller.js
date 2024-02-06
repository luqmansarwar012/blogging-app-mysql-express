const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = {
    name,
    email,
    password: hashedPassword,
  };

  models.User.create(user)
    .then((result) => {
      res.status(200).json({ message: "user created", user: result });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "something went wrong" });
    });
};
const login = (req, res) => {
  models.User.findOne({ where: { email: req.body.email } })
    .then(async (user) => {
      if (!user) {
        return res.status(404).json({ message: "Invalid credentials!" });
      }
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials!!" });
      }
      const token = jwt.sign({ email: user.email }, "jwtSecret");

      res.status(200).json({ message: "Login successfull", token });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    });
};
module.exports = { signup, login };
