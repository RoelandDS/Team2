var http = require('http');
var mysql = require('mysql');

var conn = mysql.createConnection({
  host     : '173.194.105.180',
  user     : 'student',
  password : 'mulestudent',
  database : 'training'
});

conn.connect();

conn.query('SELECT img_data FROM qr_code WHERE img_title = "[Koen & Jarno]"', function(err, rows, fields) {
	if (err){
		throw err;
	} 
  
	http.createServer(function(req, res) {
		res.writeHead(200, {"Content-Type": 'image/png', 'Access-Control-Allow-Origin': '*'});
		res.write(rows[0].img_data);
		res.end();
	}).listen(4000);
	console.log('Server gestart op http://localhost:4000 ...');

  
});

conn.end();