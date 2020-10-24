const bot = require('./src/bot');
const args = process.argv.slice(2);

bot.whatToDo.createPoemAndPostOnFacebook();
