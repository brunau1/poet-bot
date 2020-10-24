const Browser = require('../config/browser');
const globals = require('../utils/globals');

module.exports = async (tone, quote) => {
  const page = await Browser.getInstance();
  await page.goto(globals.poemGeneratorUrl(tone, quote));
  await page.waitForSelector('.poem');
  const poem = await page.evaluate(() => {
    let text = '';
    [...document.querySelectorAll('.popr')].forEach((item) => {
      if (item.lastChild) text += `${item.lastChild.textContent}\n`;
      else text += '\n';
    });
    return text;
  });
  console.log(poem);
  return poem;
};
