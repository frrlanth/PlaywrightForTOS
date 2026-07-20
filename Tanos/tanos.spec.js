const { chromium, test } = require('@playwright/test');

test('open tanos login page', async () => {
  const context = await chromium.launchPersistentContext(
    'C:\\Users\\ILCS\\AppData\\Local\\Google\\Chrome\\User Data',
    {
      headless: false,
      channel: 'chrome',
      args: ['--profile-directory=Default']
    }
  );
  const page = await context.newPage();
  await page.goto('https://tanos.pelindo.co.id/login');
  await page.pause();
  await context.close();
});