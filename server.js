const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require('morgan'); // used to see requests
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const dbUrl = 'mongodb://heroku_k785s0v0:e2f7qsoc33hr1f43ktf12946t7@ds145456.mlab.com:45456/heroku_k785s0v0';

// Connect to remote MongoDB
mongoose.connect(dbUrl, { useNewUrlParser: true }).then(() => { console.log("Connected to MongoDB"); },
  err => { console.log(err) }
);

// Initialize API routes
const indexRouter = require("./routes/index");
const entryTradesRouter = require("./routes/entryTrades");

// Log all requests to the console
app.use(logger('dev'));

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use API routes
app.use("/", indexRouter);
app.use("/", entryTradesRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Send every request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
