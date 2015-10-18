// подключение модулей
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./server/config/config');
var methodOverride = require('method-override');
var morgan = require('morgan');
var oauth2 = require('./server/auth/oauth2');
require('./server/auth/auth');
             
var passport = require('passport');
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
// запуск сервера на порту 8080
app.listen(config.port, function(err) {
  if (err) throw err;
  console.log("Server started at port 8080!");
});
app.use(express.static(path.join(config.root, 'client')));
app.set('appPath', path.join(config.root, 'client'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(morgan('dev'));
//app.use(express.logger('dev')); // выводим все запросы со статусами в консоль

app.use(passport.initialize());

app.post('/oauth/token', oauth2.token);

app.set('view engine', 'jade');
app.set('views', './server/views');

require('./server/routes/index')(app);
require('./server/routes/api')(app);
require('./server/routes/people')(app);

// инициализировать Oauth

