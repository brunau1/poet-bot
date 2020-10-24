const searchForAQuote = require('./tasks/searchForAQuote');
const generateThePoem = require('./tasks/generateThePoem');

exports.run = async (tone, postOnFacebook, postOnTwitter) => {
  const category =
    tone == 'heartbreak' ? 'love' : tone == 'dark' ? 'death' : tone;
  const quote = await searchForAQuote(category);
  const poem = await generateThePoem(tone, quote);
};
