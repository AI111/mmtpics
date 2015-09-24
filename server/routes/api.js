var Person = require('../models/person');

module.exports = function (app) {

	// обработка маршрута для http://localhost/api
	app.route('/api').get(function(req, res) {		
		res.json({"message" : "Welcome to our api!"});
	});
	
	// обработка маршрута для http://localhost/api/people
	// выдача всех записей в базе данных
	app.route('/api/people').get(function(req, res) {		
		Person.find(function(err, people) {
			if(err) throw err;
			res.json(people);
		});
	});
	
	// обработка маршрута для http://localhost/api/people/id
	// где id - идентификатор записи в БД.
	// выводит запись из БД с идентификатором id
	app.get('/api/people/:id', function(req, res) {
		Person.findById(req.params.id, function(err, person) {
			if(err) res.send(err);
			
			res.json(person);
		});
	}); 
	
	// обрабатывает POST запрос на создание новой записи в БД
	// информация берется из тела запроса в JSON-формате
	app.post('/api/people', function(req, res) {
		var p = new Person();
				
		p._id = req.body._id;
		p.fullName = req.body.fullName;	
		p.birthDay = req.body.birthDay;
				
		p.save(function(err) {
			if (err) res.send(err);
			
			res.json({message: 'person added!'});		
		});
	});
}