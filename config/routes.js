module.exports = function(app, routes) {

	app.get('/', routes.site.index);
	app.get('/index', routes.site.index);
	//app.get('/user', routes.user.profile); etc..


	app.get('/500', routes.error.e500);
	//this is always the last one
	app.get('/*', routes.error.e404);

};