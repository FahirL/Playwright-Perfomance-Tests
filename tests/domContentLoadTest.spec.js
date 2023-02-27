const { chromium } = require('@playwright/test');
const { test } = require('@playwright/test');
const assert = require('assert');

test('domContentLoadTest.js', async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const startTime = Date.now();

  await page.goto('https://www.example.com/');

  const endTime = Date.now();
  const domContentLoadedTime = endTime - startTime;

  console.log(`DOM Content Loaded: ${domContentLoadedTime} ms`);

  assert.ok(domContentLoadedTime <= 2000, 'The DOM content took too long to load!');

  await browser.close();
});