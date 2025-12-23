const express = require('express');
const data = require('./learn.json');
const app = express();
const path = require('path');
const { users } = data;
const fs = require('fs');


function recordMiddleware(req, res, next) {
    let { url, ip } = req;
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url}, ${ip}\r\n`);
    next();
}

let checkCodeMiddleware = (req, res, next) => {
    if (req.query.code === '521') {
        next();
    } else {
        res.send('Error')
    }
}


app.use(recordMiddleware);
app.get('/home', (req, res) => {
    
    res.send('Homepage');
})

// app.get('/admin', (req, res) => {
//     res.send('Backend');
// })


app.get('/admin', checkCodeMiddleware, (req, res) => {
    res.send('后台页面');
})
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found<h1>')
})
app.listen(3000, () => {

})

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
