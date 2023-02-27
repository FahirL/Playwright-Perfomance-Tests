const { chromium } = require('@playwright/test');
const { test } = require('@playwright/test');
const assert = require('assert');

test('loadTimeTest.js', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const startTime = Date.now();

  await page.goto('https://www.facebook.com/');

  const endTime = Date.now();
  const loadTime = endTime - startTime;

  console.log(`Page load time: ${loadTime} ms`);

  assert.ok(loadTime <= 4500, 'The page did not load within 4.5 seconds!');

  await browser.close();
});