const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('Erro: BOT_TOKEN não definido nas variáveis de ambiente!');
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || '';

  if (text.toLowerCase() === '/start') {
    bot.sendMessage(chatId, 'Salve, sou sua deusa bot pronta para dominar! Meaw 🌹');
  } else {
    bot.sendMessage(chatId, `Você disse: "${text}". Bora avançar juntos!`);
  }
});