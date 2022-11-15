let demo = require('./lib/demo');
let malib = require('./lib/malib');

// exports.mafunction = malib.mafonction;
// exports.test = demo.test;

exports.test = function (){
    console.log('mon module ne fait rien');
}

exports.mafonction = function(){
    console.log('fkjdjkgdf');
}