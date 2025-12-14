const fs = require('fs');
const files = fs.readdirSync('./');


files.forEach(item => {
    console.log(item);
})


