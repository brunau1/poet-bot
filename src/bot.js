const searchForAQuote = require('./tasks/searchForAQuote');
const generateThePoem = require('./tasks/generateThePoem');

exports.run = async (tone, postOnFacebook, postOnTwitter) => {
  const quote = await searchForAQuote(tone);
  const poem = await generateThePoem(tone);
  console.log(quote);
};
