const express = require('express');
const data = require('./learn.json');
const app = express();
const path = require('path');
const { users } = data;

app.get('/other', (req, res) => {
    res.redirect('https://www.baidu.com');

})

app.get('/js', (req, res) => {
    const file = path.join(__dirname, 'source.txt');
    res.download(file, 'hahha');
})
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

app.listen(3000, () => {
    console.log('running');
})

