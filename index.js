/**
 * Development server
 */


'use strict';

var path = require('path'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	express = require('express'),
	multer = require('multer')(),
	app = express(),
	PORT = 9999;


// Settings
// ---------------------------

app.disable('x-powered-by');
app.set('port', process.env.PORT || PORT);
app.use(cookieParser());
app.use(express.static(__dirname + '/build'));


// Middleware
// ---------------------------

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());


// REST API
// ---------------------------

app.use(function (req, res, next) {
	console.log('cookie: ' + JSON.stringify(req.cookies) + ' from ' + req.url);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7777');
	res.setHeader('Access-Control-Allow-Credentials', true);

	next();
});

// GET
app.get('/:path?/:any?', function (req, res) {
	var path = req.params.path;
	if (!path) {
		return res.sendFile(__dirname + '/build/index.html');
	}

	setTimeout(function () {
		switch (path) {
			case 'user-info' :
				return res.json({
					res : true,
					val : {
						level : 1,//0:employee ; 1 : manager ;2 : administrator
						operation : {
							name : 'Zoe Hu',
							emailAddress : 'zoe.hu@cdpgroupltd.com',
							phone : 12345678900,
							password : 123,
							company : 'CDP',
							address : 'Shanghai',
							position : 'Tec',
							setting : 'See More',
							employee : 23
						}
					}
				})
		default:
			res.json({
				res: true
			});
		}
	}, 1000);
});

// POST
app.post('/:path?/:id?', multer.single('attach'), function (req, res) {
	console.log('post: ', req.body, req.file, req.params.path);
});

// PUT
app.put('/:path?', function (req, res) {
	console.log('put: ', req.body);

	res.json({
		res: true
	});
});

// DELETE
app.delete('/:path?', function (req, res) {
	console.log('delete: ', req.body);

	res.json({
		res: true
	});
});


// Listening
// ---------------------------

app.listen(app.get('port'), function () {
	console.log('Listening at port: ' + app.get('port'));
});
