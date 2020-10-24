const Browser = require('../config/browser');
const selectors = require('../utils/selectors');
const globals = require('../utils/globals');

module.exports = async (tone, quote) => {
  const page = await Browser.getInstance();
  await page.goto(globals.poemGeneratorUrl(tone, quote));
};
