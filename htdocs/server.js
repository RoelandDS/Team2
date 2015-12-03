var http = require('http');

var app = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'});
    res.write(JSON.stringify({"name":"Koen & Jarno","members":[{"name":"Koen Vaes"},{"name":"Jarno Michiels"}]}));
	res.end();
});
app.listen(4000);
console.log('Server gestart op http://localhost:4000 ...');