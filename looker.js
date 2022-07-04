const mineflayer = require('mineflayer')
const data = require("./config.json")

const bot = mineflayer.createBot({
    host: data.host,
    port: data.port,
    username: `${data.bot_prefix}looker`,
    password: ''
  })
  
  bot.once('spawn', function () {
    setInterval(() => {
      const entity = bot.nearestEntity()
      if (entity !== null) {
        if (entity.type === 'player') {
          bot.lookAt(entity.position.offset(0, 1.7, 0)) // Look Head
        } else if (entity.type === 'mob') {
          bot.lookAt(entity.position)
        }
      }
    }, 50)
  })