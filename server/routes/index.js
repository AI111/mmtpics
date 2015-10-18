var express = require('express');
var router = express.Router();
var path = require('path');
var indexController = require('../controllers/indexController');

module.exports = function (app) {

	app.route('/')
			.get(function(req, res) {
				res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
			});
};