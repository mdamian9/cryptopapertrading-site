const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const logger = require('morgan');
const PORT = process.env.PORT || 3001;

