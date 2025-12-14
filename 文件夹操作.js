const fs = require('fs');

fs.mkdir('./html', err => {
    
});

fs.mkdir('./a/b/c', {recursive: true}, err => {

})


fs.readdir('./', (err, data) => {
 console.log(data);
})

fs.rmdir('./a', {recursive: true}, () => {

})