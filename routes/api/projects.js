const express = require("express");
const router = express.Router();

// Item Model
const Project = require("../../models/Project");


// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get("/", (req, res) => {
  Project.find(function(err, res) {
  }).then(projects => res.json(projects));
});

module.exports = router;
