const { error } = require('console');
const fs = require('fs');
const path = require('path');



const sourcePath = path.join(__dirname, 'source.txt');

const targetPath = path.join(__dirname, 'target.txt');

const rs = fs.createReadStream(sourcePath);
const ws = fs.createWriteStream(targetPath);

rs.on('data', chunk => {
    // console.log(chunk);

    // ws.write(chunk);

    const canWrite = ws.write(chunk);
    if (!canWrite) {
        rs.pause();
        ws.once('drain', () => {
            rs.resume();
        });
    }
});


rs.on('error', err => {
    console.error(err.message);
})
rs.on('end', () => {
    ws.end();
})

ws.on('error', err => {
    console.error(err.message);
})






// js rust python