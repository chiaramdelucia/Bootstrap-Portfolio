

const path = require ('path');

//HTML Routes
//=============================================================
module.exports = function(app){
	app.get('/', function (req, res){
		res.sendFile(path.join(__dirname, '/app/public/index.html'));

});