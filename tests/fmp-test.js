const { chromium } = require('playwright');
const assert = require('assert');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.facebook.com/');

  const startTime = Date.now();

  // Wait for the first important image to load
  const firstImportantImage = await page.waitForSelector('img[src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"]');
  const endTime = Date.now();

  const loadTime = endTime - startTime;
  console.log(`First meaningful paint: ${loadTime} ms`);

  assert.ok(loadTime <= 2500, 'The first important image did not load within 2.5 seconds!');

  await browser.close();
})();