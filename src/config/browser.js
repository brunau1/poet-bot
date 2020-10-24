const puppeteer = require('puppeteer');

let pageInstance = null;

class Browser {
  static async getInstance() {
    if (!pageInstance) {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      pageInstance = page;
    }
    return pageInstance;
  }
}
module.exports = Browser;
