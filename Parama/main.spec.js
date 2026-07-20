const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/LoginPage');

test('login with username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('tanto.dhu', 'Parama123!');


});