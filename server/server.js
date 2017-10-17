var express = require("express");
var PORT = process.env.PORT || 3000;
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../app/dist")));
app.listen(PORT, function() {
    console.log("App running on port 3000!");
});