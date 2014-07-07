/**
 * Created with JetBrains WebStorm.
 * User: pauldorn
 * Date: 7/7/14
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */

var requirejs = require('requirejs'); // AMD style module loading

requirejs(['express', 'morgan'], function(express, morgan){

	var app = express();
	app.use(morgan('dev'));
	app.use(express.static('/js/ko', __dirname + '/node_modules/knockout/build/output/'));
	app.use(express.static(__dirname + '/public'));

//	app.route('/', function(req, res){
//		res.send('Hello World');
//	});

	app.listen(3000);
	console.log('Express started on port 3000');

});