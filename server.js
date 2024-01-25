const express = require("express");
const postsRoute = require("./routes/posts");
require("dotenv").config();
const app = express();

// App routes
app.use("/posts", postsRoute);

// Listening to port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

module.exports = app;
