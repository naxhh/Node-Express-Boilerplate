/*
 * Error Pages definitions
 */

//404 error
 exports.e404 = function(req, res) {
 	res.render('errors/404');
 }

 //500 error
 exports.e500 = function(req,res) {
 	res.render('errors/500');
 }