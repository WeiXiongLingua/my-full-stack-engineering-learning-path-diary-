const fs = require('fs');

fs.writeFile('./座右铭.txt', 'OK', err => {
    //写入失败
    if (err) {
        console.error('写入失败:', err.name);
        return;
    }
    console.log('写入成功');
})
fs.writeFileSync('test.txt', 'helo');

fs.appendFile('test.txt', ' nihao', () => {});

