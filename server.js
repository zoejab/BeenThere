var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    routes = require('./config/routes'),
    app = express();

app.use(logger('dev'));
app.use( express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/bower_components', express.static(__dirname + "/bower_components"));


app.use( express.static(__dirname+'/public'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect('mongodb://localhost/BeenThereApp', function (err) {
  if(err){
    console.log(err);
  }else {
    console.log('connection successful');
  }
});

//Set up the port to listen
app.set('port', (process.env.PORT || 8000));

app.listen(app.get('port'), function() {
    console.log("App running on port : ", app.get('port'));
});
