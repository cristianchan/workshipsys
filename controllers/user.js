var mongoose = require('mongoose');  
var User  = mongoose.model('user');
var Crypto = require('../common/crypto');

exports.addUser = function(req, res) {  
    console.log('POST');
    console.log(req.body);
    console.log(req.body.user);
 	console.log(req.body.pass);

    var user = new User({
      	user: 	req.body.user,
		pass:	Crypto.encrypt(req.body.pass)
    });

    user.save(function(err, user) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(user);
    });
};

exports.findAllUsers = function(req, res) {  
    User.find(function(err, users) {
    if(err) res.send(500, err.message);

    console.log('GET /user')
        res.status(200).jsonp(users);
    });
};