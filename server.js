var express = require("express");
var bodyParser = require("body-parser");

var apiRoutes = require("./app/routing/apiRoutes.js")
var htmlRoutes = require("./app/routing/htmlRoutes.js")


var app = express();
var PORT = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);
app.use(htmlRoutes);




app.listen(PORT)