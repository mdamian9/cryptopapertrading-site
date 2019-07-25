const express = require('express');
const path = require('path');
const logger = require('morgan'); // used to see requests
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');

// Use dotenv to access Heroku config vars
require('dotenv').config();

// Connect to remote MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => { console.log('Connected to MongoDB'); },
  err => { console.log(err) }
);
mongoose.set('useCreateIndex', true);

// Initialize API routes
const usersRouter = require('./routes/users');
const entryTradesRouter = require('./routes/entryTrades');
const exitTradesRouter = require('./routes/exitTrades');
const twitterRouter = require('./routes/twitterRouter');

// Log all requests to the console
app.use(logger('dev'));

// Setting up bodyParser to use json and set it to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up CORS handling
app.use((req, res, next) => {
  // Add headers to adjust response with the following headers to handle CORS errors
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  // If browser sends OPTIONS request, set header 
  if (req.method === 'OPTIONS') {
    // Set header to let browser know what requests it may send
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  };
  // Send request to next middleware (our routes in this case)
  next();
});

// Use API routes
app.use('/users', usersRouter);
app.use('/entry-trades', entryTradesRouter);
app.use('/exit-trades', exitTradesRouter);
app.use('/tweets', twitterRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
};

// Adust error handling - when deployed to heroku response is error json

// // Handle all requests that did not reach a route (error handling)
// app.use((req, res, next) => {
//   // Create new error and pass in error message
//   const err = new Error('Not found');
//   // Set status
//   err.status = 404;
//   // Forward error request to next middleware handler
//   next(err);
// });

// // Handle errors from above / failed DB operations
// app.use((err, req, res, next) => {
//   if (err) {
//     res.status(err.status || 500).json({
//       error: {
//         message: err.message
//       }
//     });
//   };
// });

// Send every request to the React app
// Define any API routes before this runs
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
