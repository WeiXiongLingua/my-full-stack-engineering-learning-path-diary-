const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    

    let root = __dirname + '/page';
    let { pathname } = new URL(req.url, 'http://127.0.0.1');
    console.log(req.url);
    let filePath = root + pathname;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log('Failed');
        } else {
            res.end(data);
        }
    })
})

server.listen(9000)

