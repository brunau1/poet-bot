const urlSufix = '-poem-generator?';
const lastParam = '&gosubmit=1';
const urlPrefix = 'https://www.poemofquotes.com/tools/poetry-generator/';

module.exports = {
  poemGeneratorUrl: (poemCategory, quote) => {
    return `
      ${urlPrefix}${poemCategory}${urlSufix}step0=${encodeURIComponent(
      quote
    )}${lastParam}`;
  },
  quotesGeneratorUrl: 'https://quotes-generator.com/quotes-generator.php',
};
