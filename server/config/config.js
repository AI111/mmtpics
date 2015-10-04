var port = 8080;

var dbUrl = "mongodb://localhost/lect3";
var mongoose = require("mongoose");
mongoose.connect(dbUrl);

var tokenLife = 3600;

exports.port = port;
exports.dbUrl = dbUrl;
exports.tokenLife = tokenLife;
exports.mongoose = mongoose;