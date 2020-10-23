const urlSufix = '-poem-generator?';
const lastParam = '&gosubmit=1';
const urlPrefix = 'https://www.poemofquotes.com/tools/poetry-generator/';

module.exports = {
  poemGenerator: (poemCategory, quote) => {
    return {
      url:
        urlPrefix +
        poemCategory +
        urlSufix +
        'step0=' +
        encodeURIComponent(quote) +
        lastParam,
    };
  },
  quotesGenerator: 'https://quotes-generator.com/quotes-generator.php',
};
