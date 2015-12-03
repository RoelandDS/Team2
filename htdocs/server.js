var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({"name":"Koen & Jarno","members":[{"name":"Koen Vaes"},{"name":"Jarno Michiels"}]}));
	res.end();
});
app.listen(4000);
console.log('Server gestart op http://localhost:3000 ...');