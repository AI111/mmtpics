var Person = require('../models/person');

module.exports = function (app) {
	
	var peopleController = require('../controllers/peopleController.js');

	// обработка маршрута для http://localhost/people
	// выдача всех записей в базе данных
	app.route('/people').get(peopleController.showPeople);
	
	// обработка маршрута для http://localhost/people/id
	// где id - идентификатор записи в БД.
	// выводит запись из БД с идентификатором id
	app.get('/people/:id', peopleController.showPerson); 
	
	app.param('id', peopleController.getById);
}