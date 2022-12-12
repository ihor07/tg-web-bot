const TelegramBot = require('node-telegram-bot-api')

const token = '5823526718:AAESdvdx3ik1qMlRuv21Q5NWW1easW0BrRc'

const webAppUrl = 'https://teal-unicorn-943661.netlify.app/'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Now show button, fill in form', {
      reply_markup: {
        keyboard: [
          [{ text: 'Fill in form', web_app: { url: webAppUrl + '/Forms' } }],
        ],
      },
    })
  }

  await bot.sendMessage(chatId, 'Go to the our internet shop', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Make Order', web_app: { url: webAppUrl } }]],
    },
  })

  bot.sendMessage(chatId, 'Received your message')
})
