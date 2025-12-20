const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const html = fs.readFileSync(path.join(__dirname, 'index.html'),
            'utf-8'
        )
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(html);
    } else if (req.url === '/style.css') {
        const css = fs.readFileSync(
            path.join(__dirname, 'style.css'),
            'utf-8'
        )
        res.setHeader('Content-Type', 'text/css')
        res.end(css)
    } else if (req.url === '/script.js') {
        const js = fs.readFileSync(
            path.join(__dirname, 'script.js'),
            'utf-8'
        )
        res.setHeader('Content-Type', 'text/javascript')
        res.end(js)
    }

})

server.listen(9000)
