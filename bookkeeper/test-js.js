const name = "jack"
const age = 20
const msg = `My name is ${name}, I am ${age} old`

function result() {
    return 1
}

const answer = `Result: ${result()}`
console.log(answer)

function now() {
    return new Date().toISOString()
  }
  
  console.log(`[${now()}] Server started`)
  