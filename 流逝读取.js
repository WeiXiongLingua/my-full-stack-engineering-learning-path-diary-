const fs = require('fs');

const path = require('path');

const sourcePath = path.join(__dirname, 'source.txt');
const targetPath = path.join(__dirname, 'target.txt');

const rs = fs.createReadStream(sourcePath, {
    encoding: 'utf-8',
    highWaterMark: 10
});

const ws = fs.createWriteStream(targetPath);


rs.on('data', chunk => {
    ws.write(chunk);
    console.log(chunk.length);
});

rs.on('end', () => {
    ws.end();
    console.log('File copy finished');
});

rs.on('error', err => {
    console.error('Read error:', err);
});
ws.on('error', err => {
    console.error('Write error:', err);
});

// 200 请求success, 403 ban, 404 , can not find. 