//1. A GET Route to `/survey` which should display the survey page.
//2. A default, catch-all route that leads to `home.html` which displays the home page. 

var path = require("path");
var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

router.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

module.exports = router