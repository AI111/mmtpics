var Person = require('../models/person');

exports.showPeople = function(req, res) {
	Person.find(function(err, people) {
		if (err) res.render('people');
		
		res.render('people', {title : "Вывод всего списка", list : people});
	});			
};

exports.showPerson = function(req, res) {
	res.render('people', {person : req.person, title : "Вывод информации о человеке"});		
};

exports.getById = function(req, res, next, id) {
	Person.findById(id, function(err, person) {
		if (err) return next(err);
		
		req.person = person;
		next();
	});
}