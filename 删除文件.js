const fs = require('fs');

fs.rm('shit.txt', err => {
    console.log('success');
})