var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var person = new Schema({
	nombre: 	{ type: String },
	apellidos:	{ type: String },
	fechaNac: 	{ type: Date   },
	faceBook: 	{ type: String },
	twitter : 	{ type: String },
	telefono : 	{ type: String },
	correo: 	{ type: String },
	instagram:  { type: String },
	privilegio: { type: [String], enum:['Director','Guitarrista','Bajista','Solista','Baterista','Coordinador','Cantor'] 
	},
	DatosPapa : {
		nombre: 	{ type: String },
		apellidos:	{ type: String },
		telefono : 	{ type: String },
		correo: 	{ type: String}
	},
	DatosMama : {
		nombre: 	{ type: String },
		apellidos:	{ type: String },
		telefono : 	{ type: String },
		correo: 	{ type: String}
	}
		
});

module.exports = mongoose.model('person', person);  