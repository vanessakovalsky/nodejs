const http = require('http');
const { parse } = require('querystring');
var read_files = require('readfiles');

function collectRequestData(request, callback){
  const FORM_URLENCODED = 'application/x-www-form-urlencoded';

  if(request.headers['content-type'] === FORM_URLENCODED) {
    let body ='';
    request.on('data', chunk => {
      body += chunk.toString();
    });
    request.on('end', () => {
      callback(parse(body));
    });
  }
  else {
    callback(null);
  }
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST'){
    collectRequestData(req, result => {
      console.log(result);
      console.log(read_files);
      //read_files.readFiles(result.originPath, result.destPath);
      res.end(`Le repertoire d'origine est ${result.originPath}`);
    });
  }
  else{
    res.end(`
      <!doctype html>
      <html>
      <body>
        <form ation="/" method="post">
          <input type="text" name="originPath" /><br />
          <input type="text" name="destPath" /><br />
          <button>Save</button>
        </form>
      </body>
      </html>
    `);
  }
});

server.listen(3000);
