const { TelegramBot } = require('telegramsjs')

const bot = new TelegramBot(process.env.TG_TOKEN)

bot.on('ready', async (client) => {
  bot.setMyCommands({
    commands: [
      {
        command: '/start',
        description: 'starting command'
      },
      {
        command: '/remove',
        description: 'remove session'
      },
      {
        command: '/stats',
        description: 'statistics session'
      },
      { command: '/horarios', description: 'Horario de las dependencias' }
    ]
  })

  console.log(`Starting ${client.username}`)
})

bot.use({})

bot.on('message', (ctx) => {
  bot.session.counter = bot.session.counter || 0
  bot.session.counter++
  ctx.replyWithMarkdownV2(
    `Counter updated, new value: \`${bot.session.counter}\``
  )
})

bot.command('start', (ctx) => {
  ctx.replyWithMarkdown(' *thanks for using telegramsjs ❤️*')
  console.log(ctx.util.checkLocation())
})

bot.command('horarios', (ctx) => {
  ctx.replyWithMarkdown('horarols dasdsa')
  console.log('mandando horarios')
})

bot.login()
