const mineflayer = require('mineflayer')
const data = require("./config.json")

let i = 0
let max_i = data.max_bot

if (process.argv.length >= 3) {
    console.log('Usage : node afk.js')
    process.exit(1)
}

function next() {
    if (i < max_i) {
        setTimeout(() => {
            createBot(`${data.bot_prefix}${i}`)
            next()
        }, 100)
        i++
    }
}
next()

function createBot(name) {
   mineflayer.createBot({
        host: process.argv[2],
        port: parseInt(process.argv[3]),
        username: name
    })
}