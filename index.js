/**
 * Created with JetBrains WebStorm.
 * User: pauldorn
 * Date: 7/7/14
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */

var requirejs = require('requirejs'); // AMD style module loading

requirejs(['express', 'morgan', 'path', 'fs'], function(express, morgan, path, fs){

	var app = express();
	app.use(morgan('dev'));
	app.use(express.static('/js/ko', path.join(__dirname,'node_modules' , 'knockout','build','output')));
	app.use(express.static( path.join(__dirname, 'public')));

    app.get('/getTestYears', function(req, res){
        fs.readdir('tests', function(err, files){
            if(err) {
                res.json({ error: err});
            } else {
                res.json({ data: files });
            }

        });
    });

    app.get('/getTestMonths', function(req, res){
        fs.readdir(path.join('tests', req.query.testYear), function(err, files){
            if(err) {
                res.json({ error: err});
            } else {
                res.json({ data: files });
            }

        });
    });

    app.get('/getTests', function(req, res){
        fs.readdir(path.join('tests', req.query.testYear, req.query.testMonth), function(err, files){
            if(err) {
                res.json({ error: err});
            } else {
                res.json({ data: files });
            }

        });
    });
//	app.route('/', function(req, res){
//		res.send('Hello World');
//	});

	app.listen(3000);
	console.log('Express started on port 3000');

});