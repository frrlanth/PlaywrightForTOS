const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/TosnusLoginPage');

test('login with username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('tanto.dhu', 'Parama123!');


});