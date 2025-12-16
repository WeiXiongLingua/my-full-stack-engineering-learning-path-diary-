const http = require('http')
const url = require('url')
const fs = require('fs');
const path = require('path');
// const server = http.createServer((req, res) => {
//   let body = ''
//   req.on('data', (chunk) => {
//     body += chunk
//   })
//   req.on('end', () => {
//     console.log(body)
//     res.end('ok')
//   })

// })

const server = http.createServer((req, res) => {
    // let myUrl = new URL(req.url, 'http://localhost:3000')
    
    // if (myUrl.pathname === '/login') {
    //     res.end('login success');
    // } else if (myUrl.pathname === '/register') {
    //     res.end('register success');
    // } else {
    //     res.end('404 not found');
    // }
    // res.statusCode = 200;
    // res.statusMessage = 'OK';
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    // res.setHeader('test', [1,2,2])
    // let {method} = req;
    // let {pathname} = new URL(req.url, 'http://localhost:3000')
    // if (method === 'GET' && pathname === '/login') {
    //     res.end('login success');
    // } else if (method === 'GET' && pathname === '/register') {
    //     res.end('register success');
    // } else {
    //     res.end('404 not found');
    // }
    // let html = fs.readFileSync(__dirname + '/html/index.html')
    // res.end(html)
    res.setHeader('Content-Type', 'text/css')

    res.setHeader('Content-Type', 'application/javascript')

    let {pathname} = new URL(req.url, 'http://127.0.0.1:3000')
    if (pathname === '/') {
        let html = fs.readFileSync(__dirname + '/html/index.html')
        res.end(html)
    }  else if (pathname === '/index.css') {
        let css = fs.readFileSync(__dirname + '/css/style.css')
        res.end(css)
    } else if (pathname === '/index.js') {
        let js = fs.readFileSync(__dirname + '/js/index.js')
        res.end(js)
    } else {
        res.end('404')
    }

}).listen(3000, () => {
    console.log('server is running on port 3000');
});
