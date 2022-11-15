// Import module HTTP
let http = require('http');
let fs = require('fs');

// Create server

let server = http.createServer(function(req,res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./exercice2.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen('8054');