const bot = require('./src/bot');
const args = process.argv.slice(2);
const tone = args[0];
const postOnFacebook = args.includes('facebook');
const postOnTwitter = args.includes('twitter');

bot.run(tone, postOnFacebook, postOnTwitter);
