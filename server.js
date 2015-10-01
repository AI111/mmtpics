// подключение модулей
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./server/config/config');
var log = require('./server/log')(module);
var methodOverride = require('method-override');

var oauth2 = require('./server/auth/oauth2');
             require('./server/auth/auth');
             
var passport = require('passport');              

// запуск сервера на порту 8080
app.listen(config.port, function(err) {
  if (err) throw err;
  console.log("Server started at port 8080!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('X-HTTP-Method-Override'));

//app.use(express.logger('dev')); // выводим все запросы со статусами в консоль

app.use(passport.initialize());

app.post('/oauth/token', oauth2.token);

app.set('view engine', 'ejs');
app.set('views', './server/views');

require('./server/routes/index')(app);
require('./server/routes/api')(app);
require('./server/routes/people')(app);

// инициализировать Oauth

