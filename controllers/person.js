var mongoose = require('mongoose');  
var Persona  = mongoose.model('person');
//var personaCtlr = require('./controllers/person');
//GET - Return all persons in the DB
exports.findAllPersons = function(req, res) {  
    Persona.find(function(err, persons) {
    if(err) res.send(500, err.message);

    console.log('GET /persona')
        res.status(200).jsonp(persons);
    });
};

exports.addPerson = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var persona = new Persona({
      	nombre: 	"Default",
		apellidos:	"Default",
    });

    persona.save(function(err, persona) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(persona);
    });
};