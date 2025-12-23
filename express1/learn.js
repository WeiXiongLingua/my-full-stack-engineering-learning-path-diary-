

app.get('/', (req, res) => {
    res.render('index', {
      title: '我的博客',
      user: { name: '小明', isAdmin: true },
      friends: ['小红', '小刚', '小李'],
      articleContent: '<p><strong>这是一段加粗的富文本</strong></p>'
    });
  });
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const path = require('path');

// const fs = require('fs');

// const homeRouter = require('./homerouter.js')
// const adminRouter = require('./adminrouter.js')

// app.use(homeRouter)
// app.use(adminRouter)
// app.listen(3000)
// app.use(express.static(__dirname + '/public'))

// function antiHotLink(req, res, next) {
//     const referer = req.headers.referer || ''
//     const allowList = [
//         '127.0.0.1:3000'
//     ]

//     const isAllowed = allowList.some(domain => referer.includes(domain))
//     if (!isAllowed) {
//         return res.status(403).send('Forbidden')
//     }
//     next()
// }


// app.post('/login', antiHotLink, (req, res) => {
//     res.send('ok')
// })
// // create application/json parser
// const jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded()


// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html');
// })
// app.post('/login', urlencodedParser, (req, res) => {
//     console.log(req.body);
//     res.send("Success");
// })




// app.get('/', (req, res) => {
//     res.end('Hi')
// })
// app.use(express.static(__dirname + '/public'))

// app.get('/home', (req, res) => {
//     res.end('Hello Express');
// })


// app.listen(3000, () => {
//     console.log("I am running");
// })
// function recordMiddleware(req, res, next) {
//     let { url, ip } = req;
//     fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}, ${ip}\r\n`);
//     next();
// }

// let checkCodeMiddleware = (req, res, next) => {
//     if (req.query.code === '521') {
//         next();
//     } else {
//         res.send('Error')
//     }
// }



// app.use(recordMiddleware);


// app.get('/home',checkCodeMiddleware, (req, res) => {
    
//     res.send('Homepage');
// })

// // app.get('/admin', (req, res) => {
// //     res.send('Backend');
// // })
// app.get('/admin', checkCodeMiddleware, (req, res) => {
//     res.send('后台页面');
// })
// app.use((req, res) => {
//     res.status(404).send('<h1>404 Not Found<h1>')
// })
// app.listen(3000, () => {

// })

// app.get('/other', (req, res) => {
//     res.redirect('https://www.baidu.com');

// })

// app.get('/js', (req, res) => {
//     const file = path.join(__dirname, 'source.txt');
//     // res.download(file, 'hahha');
//     res.sendFile(file)
// })
// app.get('/:age.html', (req, res) => {

//     let { age } = req.params;
//     const user = users.find(u => u.age === Number(age))
//     if (!user) {
//         return res.status(404).send('User not found');
//     }

//     res.end(`
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <form action="http://127.0.0.1:3000/login" method="post">
//         <button>submit</button>
//     </form>
//     <h3>${user.name}</h3>
//     <h3>${user.age}</h3>
// </body>
// </html>
//         `)
// })

// app.listen(3000, () => {
//     console.log('running');
// })
