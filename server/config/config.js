var port = 8080;
var path = require('path');
var dbUrl = "mongodb://localhost/nodejsoauth";
var mongoose = require("mongoose");
mongoose.connect(dbUrl);

var tokenLife = 3600;
exports.root= path.normalize(__dirname + '/../..');
exports.port = port;
exports.dbUrl = dbUrl;
exports.tokenLife = tokenLife;
exports.mongoose = mongoose;