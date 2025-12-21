const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    

    const mimeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
      };
      

    let root = path.join(__dirname, 'page');
    let { pathname } = new URL(req.url, 'http://127.0.0.1');

    let filePath = root + pathname;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log('Failed');
        } else {
            let ext = path.extname(filePath);
            console.log(ext)
            const type = mimeMap[ext] || 'application/octet-stream';
            res.setHeader('Content-Type', type + ';charset=utf-8');
            res.end(data);
        }
    })
})

server.listen(9000)

