const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require('morgan'); // used to see requests
const PORT = process.env.PORT || 3001;
const app = express();

// Log all requests to the console
app.use(logger('dev'));

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
  res.send("Get");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
