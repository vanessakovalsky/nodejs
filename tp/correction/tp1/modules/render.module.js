exports.render_html = function() {
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
console.log('passe dans le render');
server.listen('8054');
}

exports.render_js = function() { 
    const fs = require("fs");
const http = require("http");

const index = fs.readFile("todolist.html");
const java = fs.readFile("script.js");

// this is our request handler
const server = http.createServer((req, res) => {
 if (req.url === "/") {
   res.setHeader("Content-Type", "text/html");
   res.write(index);
 }
 if (req.url === "/script.js") {
   res.setHeader("Content-Type", "text/javascript");
   res.write(java);
 }
 res.statusCode = 200;
 res.end();
});

server.listen('8055');
}