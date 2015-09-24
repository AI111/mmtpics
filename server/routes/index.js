var express = require('express');
var router = express.Router();

module.exports = function (app) {
	
	var indexController = require('../controllers/indexController');
	
	app.get('/', indexController.index);
};