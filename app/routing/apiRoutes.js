// 1. A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// 2. A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
var express = require("express");
var router = express.Router();


var friends = require("../data/friends.js");

router.get("/api/friends", function(req, res){
    res.json(friends)
})

router.post("/api/friends", function(req,res){
    friends.push(req.body)
})

module.exports = router