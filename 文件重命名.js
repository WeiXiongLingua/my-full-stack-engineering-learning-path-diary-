const fs = require('fs');
const path = require('path');
const newtargetPath = path.join(__dirname, 'source.txt')
fs.rename(newtargetPath, 'shit.txt', err => {
    if (err) {
        console.log('Failed');
        return;
    }
    console.log('success');
});
