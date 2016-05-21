var express = require("express"),  
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());  
app.use(methodOverride());

require("./models/person");
var personCtrl = require('./controllers/person');
var router = express.Router();

router.get('/', function(req, res) {  
   res.send("Hello World!");
});

app.use(router);



var persons = express.Router();

persons.route('/person')  
  .get(personCtrl.findAllPersons)
  .post(personCtrl.addPerson);
app.use('/api', persons); 



mongoose.connect('mongodb://localhost/person', function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});




