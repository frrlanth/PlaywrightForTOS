const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://tanos.pelindo.co.id/login');

  // Manually log in here — the script will wait 60 seconds
  console.log('Please log in manually within 60 seconds...');
  await page.waitForTimeout(60000);

  // Save session
  await context.storageState({ path: 'Tanos/auth.json' });
  console.log('Session saved to Tanos/auth.json!');

  await browser.close();
})();