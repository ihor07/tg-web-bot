const TelegramBot = require('node-telegram-bot-api')

const token = '5823526718:AAESdvdx3ik1qMlRuv21Q5NWW1easW0BrRc'

const webAppUrl = 'https://teal-unicorn-943661.netlify.app'

const bot = new TelegramBot(token, { polling: true })

bot.on('message', async (msg) => {
  const chatId = msg.chat.id
  const text = msg.text

  if (text === '/start') {
    await bot.sendMessage(chatId, 'Now show button and fill the form', {
      reply_markup: {
        keyboard: [
          [{ text: 'Fill form', web_app: { url: webAppUrl + '/form' } }],
        ],
      },
    })
  }

  await bot.sendMessage(chatId, 'Go to the our internet shop', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Make Order', web_app: { url: webAppUrl } }]],
    },
  })

  if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data)

      await bot.sendMessage(chatId, 'Thanks from feedback')
      await bot.sendMessage(chatId, 'Your country' + data?.country)
      await bot.sendMessage(chatId, 'Your street' + data?.street)

      setTimeout(async () => {
        await bot.sendMessage(chatId, 'All information in this chat')
      }, 3000)
    } catch (el) {
      console.log(el)
    }
  }
  //  bot.sendMessage(chatId, 'Received your message')
})
