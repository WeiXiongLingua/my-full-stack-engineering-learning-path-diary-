const fs = require('fs');
const ws = fs.createWriteStream('./test.txt');
ws.write('1\r\n');
ws.write('1\r\n');
ws.write('1\r\n');
ws.write('1\r\n');
ws.write('1\r\n');
ws.write('1\r\n');

// 适合写入场景高的

ws.write('1\r\n');

ws.close();