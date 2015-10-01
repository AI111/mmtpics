var Person = require('../models/person');
var passport = require('passport');

module.exports = function (app) {
	
	var peopleController = require('../controllers/peopleController.js');	
	
	// обработка маршрута для http://localhost/people
	// выдача всех записей в базе данных
	app.get('/people', peopleController.showPeople);
	
	// обработка маршрута для http://localhost/people/id
	// где id - идентификатор записи в БД.
	// выводит запись из БД с идентификатором id
	app.get('/people/:id', passport.authenticate('bearer', { session: false }),  peopleController.showPerson); 
	
	app.param('id', peopleController.getById);
}