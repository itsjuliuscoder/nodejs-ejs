//load the dependencies 
var express = require('express');
var app = express();

//set the view engine of ejs 
app.set('view engine', 'ejs');

//use res.render to  load up an ejs view file 


//index page 
app.get('/', function(req, res) {
	var drinks = [
		{ name: 'PHP', drunkness:3 },
		{ name: 'Javascript', drunkness:5 },
		{ name: 'Java', drunkness:7 },
		{ name: 'Python', drunkness:10 }
	];
	var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
	res.render('pages/index', {
		drinks: drinks, 
		tagline: tagline
	});
});

//about page 
app.get('/about', function(req, res){
	res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic part for viewing this ejs template');