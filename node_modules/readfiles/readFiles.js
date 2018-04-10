exports.readFiles = function(oldPath, newPath) {
  var fs = require('fs');
  var PATH = require('path');
  fs.readdir(oldPath, function(err, filenames){
    console.log('arrive dans le readdir');
    if(err){
      console.log(err);
      return;
    }
    filenames.forEach(function(filename){
      let name = PATH.parse(filename).name;
      let ext = PATH.parse(filename).ext;
      var new_filename = name + Date.now() + ext;
      fs.rename(oldPath + filename, newPath + new_filename, function (err) {
             if (err) {
                 if (err.code === 'EXDEV') {
                     copy();
                 } else {
                     console.log(err);
                 }
                 return;
             }
             console.log('Le fichier a bien été copié');
         });

         function copy() {
             var readStream = fs.createReadStream(oldPath);
             var writeStream = fs.createWriteStream(newPath);

             readStream.on('error', callback);
             writeStream.on('error', callback);

            /* readStream.on('close', function () {
                 fs.unlink(oldPath, callback);
             });*/

             readStream.pipe(writeStream);
         }
   });
 });
}
