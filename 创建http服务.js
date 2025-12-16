const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html;charset-utf-8');
    console.log(req.method)
    console.log(req.url)
    console.log(req.httpVersion)
    res.end('Hello HTTP Server');
});



server.listen(9000, () => {
    console.log('running');
});