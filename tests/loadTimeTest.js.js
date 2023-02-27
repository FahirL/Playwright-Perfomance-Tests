const { chromium } = require('playwright');
const assert = require('assert');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const startTime = Date.now();

  await page.goto('https://demo.guru99.com/test/login.html');

  const endTime = Date.now();
  const loadTime = endTime - startTime;

  console.log(`Page load time: ${loadTime} ms`);

  assert.ok(loadTime <= 4500, 'The page did not load within 4.5 seconds!');

  await browser.close();
})();