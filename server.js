// server.js

// modules =================================================
var express= require('express');
var app=express();

// set our port
var port = process.env.PORT || 3000; 

app.use(express.static(__dirname + '/public')); 
// app.set('view engine', 'ejs');

// routes ==================================================
// require('./app/routes')(app); // configure our routes

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

// app.get('/profile', function(req, res) {
// 	res.sendFile(__dirname + '/public/profile.html');
// });

// start app ===============================================
// startup our app at http://localhost:3000
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;