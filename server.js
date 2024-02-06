const express = require("express");
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const indexRoute = require("./routes/index");
require("dotenv").config();
const app = express();

// Parsing requests data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App routes
app.use("/", indexRoute);
app.use("/posts", postsRoute);
app.use("/user", userRoute);

// Listening to port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

module.exports = app;
