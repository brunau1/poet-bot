const Browser = require('../config/browser');
const selectors = require('../utils/selectors');
const globals = require('../utils/globals');

module.exports = async (tone) => {
  tone = 'love';
  const page = await Browser.getInstance();
  await page.goto(globals.quotesGeneratorUrl);
  await page.evaluate(
    ({ tone, selectors }) => {
      document.querySelector(selectors.quotesGenerator.category).value = tone;
    },
    { tone, selectors }
  );
  await page.click(selectors.quotesGenerator.submitButton);
};
