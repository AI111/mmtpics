var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lect3');

var personSchema = new mongoose.Schema({
	_id : Number,
	fullName : {
		firstName : String,
		lastName : String
	},
	birthDay : {
		day: Number,
		month : Number,
		year : Number
	}
}); 

var Person = mongoose.model('Person', personSchema);

module.exports = Person;