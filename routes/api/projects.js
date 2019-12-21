const express = require("express");
const router = express.Router();

// Item Model
const Project = require("../../models/Project");

// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get("/", (req, res) => {
  Project.find(function(err, res) {
    console.log(res);
    console.log(err);
  }).then(elem => res.json(elem));
});
//
// @route   POST api/items
// @desc    Get A Post
// @access  Public

router.post("/create", (req, res) => {
  new Project({
    id: "3",
    name: "kak zaebalo"
  })
    .save()
    .then(item => res.json(item));
});

module.exports = router;
