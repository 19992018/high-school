const express = require ('express');
const app = express();

app.use(express.static(__dirname + 'public')); //Serves resources from public folder

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
    res.render('pages/index');
  });

  app.listen(5000);
console.log('Server is listening on port 5000');