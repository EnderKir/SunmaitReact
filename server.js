const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Project = require("./models/Project");

const app = express();
const projects = require("./routes/api/projects");
const path = require("path");

//Bodyparser Middleware
app.use(bodyParser.json());

// require( './db' );
const dbKey = require("./config/keys").mongoURI;
mongoose
  .connect(dbKey, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected... "))
  .catch(err => console.log(err));
app.use("/projects", projects);

// Serve  static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
// app.get("/projects", (req, res) => {
//   Project.find(function(err, res) {
//     console.log(res);
//     console.log(err);
//   }).then(elem => res.json(elem));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
