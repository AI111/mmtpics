var path = require('path');

exports.index = function(req, res) {
	res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
};