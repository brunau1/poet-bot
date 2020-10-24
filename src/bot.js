const searchForAQuote = require('./tasks/searchForAQuote');

exports.whatToDo = {
  createPoemAndPostOnFacebook: async () => {
    const quote = await searchForAQuote();
    console.log(quote);
  },
};
