var express = require('express');
var app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

require('./app/routes/index.server.routes.js')(app);
app.use(express.static('./public'));

app.listen(3000, function() { console.log("Hello!"); });