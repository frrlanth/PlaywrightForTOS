const { test, expect } = require('@playwright/test');
const { TosnusLoginPage } = require('./Pages/TosnusLoginPage.js');
const imported = require('./Pages/TosnusLoginPage.js');
console.log('imported:', imported);
console.log('type:', typeof imported.TosnusLoginPage);

test('login with username', async ({ page }) => {
const loginPage = new TosnusLoginPage(page);
await loginPage.login('Farrel', '59190498');

await page.getByRole('textbox', { name: 'Enter Your Username' }).click();
await page.getByRole('textbox', { name: 'Enter Your Username' }).fill('Farrel');
await page.getByRole('textbox', { name: 'Enter Your Password' }).click();
await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('59190498');
await page.getByRole('button', { name: 'Continue' }).click();
await page.goto('https://tosqa-nusantara.ilcs.co.id/mtos/mainpage/mainpage.mtos?TMNL=TP1Z3');


 
  await page.pause();
});