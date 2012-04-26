module.exports = function(app, express) {
	app.configure(function() {
		app.use(express.logger());
		app.use(express.static(__dirname + '/../public'));

		app.set('views', __dirname + '/../views');
		app.set('view engine', 'jade');
	});

	//development configuration
	app.configure('development', function() {
		app.use(express.errorHandler({
			dumpExceptions: true,
			showStack: true
		}));
	});

	//production configuration
	app.configure('production', function() {
		app.use(express.errorHandler());
	});

};