require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json());

// Configuring routes Here:
const allRoutes = require('./routes/routes');
app.use(allRoutes);

// Database Connection Here :
mongoose.connect("mongodb://localhost:27017/restApiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function () {
    console.log('We are connected')
});


app.listen(process.env.PORT, () => {
  console.log("Listening on PORT " + process.env.PORT);
});
