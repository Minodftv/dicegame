const TelegramBot = require('node-telegram-bot-api');
const token = require('./token');
const game = require('./game');
const config = require('./config');

const bot = new TelegramBot(config.telegramToken, { polling: true });

bot.onText(/\/start/, (msg) => {
  msg.reply('Welcome to Dice Game!');
});

bot.onText(/\/roll/, (msg) => {
  game.rollDice((link unavailable));
});

bot.onText(/\/bet (.+)/, (msg, match) => {
  const betAmount = match[1];
  game.placeBet((link unavailable), betAmount);
});

bot.onText(/\/transfer (.+) (.+)/, (msg, match) => {
  const recipient = match[1];
  const amount = match[2];
  token.transferTokens(recipient, amount);
});
