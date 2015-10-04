var config              = require('./server/config/config');
//var mongoose            = require('mongoose');
var mongoose = config.mongoose;
var UserModel           = require('./server/models/oauth').UserModel;
var ClientModel         = require('./server/models/oauth').ClientModel;
var AccessTokenModel    = require('./server/models/oauth').AccessTokenModel;
var RefreshTokenModel   = require('./server/models/oauth').RefreshTokenModel;
var faker               = require('Faker');

UserModel.remove({}, function(err) {
    var user = new UserModel({ username: "nikita", password: "123456" });
    user.save(function(err, user) {
        if(err) throw err;
        else console.log("New user - %s:%s",user.username,user.password); 
    });

    for(i=0; i<4; i++) {
        var user = new UserModel({ username: faker.random.first_name().toLowerCase(), password: faker.Lorem.words(1)[0] });
        user.save(function(err, user) {
            if(err) throw err;
            else console.log("New user - %s:%s",user.username,user.password);
        });
    }
});

ClientModel.remove({}, function(err) {
    var client = new ClientModel({ name: "Windows client", clientId: "xonxtPC1", clientSecret:"abc123456" });
    client.save(function(err, client) {
        if(err) throw err;
        else console.log("New client - %s:%s",client.clientId,client.clientSecret);
    });
});
AccessTokenModel.remove({}, function (err) {
    if (err) throw err;
});
RefreshTokenModel.remove({}, function (err) {
    if (err) throw err;
});


setTimeout(function() {
    mongoose.disconnect();
}, 3000);
