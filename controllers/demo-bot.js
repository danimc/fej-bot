const { TelegramBot, Markup } = require('telegramsjs')

const bot = new TelegramBot(process.env.TG_TOKEN)
bot.use({})

bot.on('ready', async (client) => {
  bot.setMyCommands({
    commands: [
      {
        command: '/start',
        description: 'starting command'
      },
      {
        command: '/direcciones',
        description: 'Directorio de direcciones de la Fiscalía del estado'
      },

      { command: '/horarios', description: 'Horario de las dependencias' }
    ]
  })

  console.log(`Starting ${client.username}`)
})

const markup = {
  inline_keyboard: [[Markup.callback('Fiscalía Estatal', 'core'), Markup.callback('Personas Desaparecidas', 'fepd'), Markup.callback('Delitos contra las Mujeres', 'fedm')]]
}

bot.command('start', (ctx) => {
  ctx.reply('Bienvenido al Asistente Digital de la Fiscalía del Estado de Jalisco')
}, 'private')

bot.command('direcciones', (ctx) => {
  ctx.reply('Por Favor selecciona la dependencia de tu interés', {
    reply_markup: markup
  })
}, 'private')

bot.action('core', (ctx) => {
  const username = ctx.from.first_name
  ctx.reply(`${username}, La Fiscalía Estatal esta ubicada en la calle 14, colonia industrial, aquí tienes las indicaciones`)
  bot.sendLocation({
    chat_id: ctx.from.id,
    latitude: 20.6390935,
    longitude: -103.3645254
  })
}, true)

/*
// Sending a document file using an HTTP URL
bot.sendDocument({
  chat_id: 913700,
  document: 'https://www.redalyc.org/pdf/439/43970102.pdf'
}).then((data) => {
  console.log(data)
})

bot.sendLocation({
  chat_id: 913700,
  latitude: 40.7128,
  longitude: -74.0060
}).then((data) => {
  console.log(data)
})

*/

// Uploading a new document file
// Please note that this is just an example and the implementation may vary based on your programming environment.
/*
const fs = require('fs')
const documentFilePath = 'file.pdf'
const documentStream = fs.createReadStream(documentFilePath)

if (documentStream) {
  console.log('se subió info')
}

bot.sendDocument({
  chat_id: 913700,
  document: documentStream
}).then((data) => {
  console.log(data)
}) */
bot.login()
