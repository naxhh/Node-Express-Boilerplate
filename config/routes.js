module.exports = function(app, routes) {

	app.get('/', routes.site.index);
	app.get('/index', routes.site.index);
	//app.get('/user', routes.user.profile); etc..

};