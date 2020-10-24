const Browser = require('../config/browser');
const selectors = require('../utils/selectors');
const globals = require('../utils/globals');

module.exports = async (tone) => {
  const page = await Browser.getInstance();
  await page.goto(globals.quotesGeneratorUrl);
  await page.evaluate(
    ({ tone, selectors }) => {
      document.querySelector(selectors.quotesGenerator.category).value = tone;
    },
    { tone, selectors }
  );
  await page.click(selectors.quotesGenerator.submitButton);
  await page.waitForSelector(`${selectors.quotesGenerator.quote}1`);
  const quote = await page.evaluate((selectors) => {
    let text = document.querySelector(`${selectors.quotesGenerator.quote}1`)
      .lastChild.textContent;
    for (let i = 1; i <= 12; i++) {
      const current = document.querySelector(
        `${selectors.quotesGenerator.quote}${i}`
      ).lastChild.textContent;
      if (current.length < text.length) text = current;
    }
    return text;
  }, selectors);
  return quote;
};
