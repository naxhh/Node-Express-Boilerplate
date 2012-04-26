var express = require('express'),
	routes = require('./routes');
var app = module.exports = express.createServer();


//Config Production/Development mode
require('./config/enviroment.js')(app, express);

//Config the callbacks for the routes
require('./config/routes.js')(app, routes);

app.listen(3000);