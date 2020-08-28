const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

const url = process.env.ATLAS_DB;
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;

connection.once("open", err => {
  err
    ? console.log("Error connecting to the MongoDB Atlas database...")
    : console.log("Connection to MongoDB Atlas successful...");
});

// Port to listen to:
const port = process.env.PORT || 5000;

app.listen(port, function (err) {
  if (err) console.log("Could not start the server: " + err);
  console.log(`Connection established on http://localhost:${port}/`);
});
