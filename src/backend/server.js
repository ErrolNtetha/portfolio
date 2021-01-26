const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();

// Parse applications
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(
  "/contact",
  express.static(path.join(__dirname, "../components/Contact"))
);
app.use(fileUpload());
app.post("/contact", function (req, res) {
  console.log(req.body);
});

// Port to listen to:
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) console.log("Could not start the server: ", err);
  console.log(`Connection established on http://localhost:${port}/`);
});
