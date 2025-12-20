const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    let filePath = __dirname + '/page' + pathname;
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Failed');
            return;
        }
        res.end(data);
    })

})

server.listen(9000)

