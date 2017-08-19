const express = require('express');
const mustacheExpress = require('mustache-express');
//const bodyParser = require('body-parser');
//const validator = require('express-validator');
//const session = require('express-session');
//const controllers = require('./controllers/controllers.js');
//const parseurl = require('parseurl');
//const routes = require('./router');
//const path = require('path');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
//app.set('views', path.join(__dirname, 'views'));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));

//routes(app);

app.listen(3000, function(){
  console.log('Let the gabblin begin...')
});

const routes = require('./routes/index');
app.use('/', routes)
