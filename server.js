const express = require("express");
const postsRoute = require("./routes/posts");
const indexRoute = require("./routes/index");
require("dotenv").config();
const app = express();

// App routes
app.use("/", indexRoute);
app.use("/posts", postsRoute);

// Listening to port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

module.exports = app;
