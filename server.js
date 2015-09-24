var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.listen(8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', './server/views');

require('./server/routes/index')(app);
require('./server/routes/api')(app);
require('./server/routes/people')(app);