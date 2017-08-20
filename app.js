const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.use(express.static('public'));


app.listen(3000, function(){
  console.log('Let the gabblin begin...')
});

const routes = require('./routes/main');
app.use('/', routes)
