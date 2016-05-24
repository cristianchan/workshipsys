var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var user = new Schema({
	user: 	{ type: String },
	pass: 	{ type: String }
		
},{ collection: 'user' });

module.exports = mongoose.model('user', user);  