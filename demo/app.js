// Import module HTTP
let http = require('http');

let demo = require('./modules/demo/demo.module');

let nodemon = require('nodemon');

// Create server

nodemon.upper('fsdkjfs');

let server = http.createServer(function(req,res){
    res.write('Arrive ici');
    demo.test();
    demo.mafunction();
    res.end();
});

server.listen('8054');