const fs = require('fs');

fs.readFile('./test.txt', (err, data) => {
    if (err) {
        console.log('读取失败~~~');
        return;
    }
    console.log(data.toString());
})


let data = fs.readFileSync('./test.txt')

console.log(data.toString())