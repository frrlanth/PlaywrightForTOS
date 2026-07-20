const { test, expect } = require('@playwright/test');

test('open tanos login page', async ({ page }) => {
  await page.goto('https://tanos.pelindo.co.id/login');
  await page.waitForLoadState('networkidle');
  await page.pause();
});