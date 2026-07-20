const { test, expect } = require('@playwright/test');
const { TanosLoginPage } = require('./Pages/TanosLoginPage.js');

test('login with username', async ({ page }) => {
  const loginPage = new TanosLoginPage(page);
  await loginPage.login('Farrel', '59190498');
  
  await page.pause();
});