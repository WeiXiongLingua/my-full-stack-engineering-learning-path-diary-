const fs = require('fs')

const data = fs.readFileSync('./learn.json')


const person = JSON.parse(data)

console.log(person.users[1]['name'])