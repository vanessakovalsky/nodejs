let fs = require("fs");
let http = require("http");


// this is our request handler
let server = http.createServer(function(req,res){
  if (req.url == "/") {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.readFile('./todolist.html', null, function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Whoops! File not found!');
        } else {
            res.write(data);
        }
        res.end();
    });
  }

  if (req.url == "/script.js") {
    res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });  
  fs.readFile("./script.js", null, function (error, data) {
    if (error) {
        res.writeHead(404);
        res.write('Whoops! File not found!');
    } else {      
        res.write(data);
    }
    res.end();
  });
 }
//  res.end();
});

server.listen('8055');