const { test, expect } = require('@playwright/test');
const { TosnusLoginPage } = require('./Pages/TosnusLoginPage');

test('login with username', async ({ page }) => {
  const loginPage = new TosnusLoginPage(page);
  await loginPage.login('Farrel', '59190498');

  await page.getByRole('textbox', { name: 'Enter Your Username' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Username' }).fill('Farrel');
  await page.getByRole('textbox', { name: 'Enter Your Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Your Password' }).fill('59190498');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.locator('[id="59114"]').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByText('Vessel & Voyage').click();

  await page.evaluate(() => document.body.style.zoom = '0.8'); // 80% zoom
 
  /*
 await page1.locator('#btnNew').click();
  await page1.getByRole('combobox', { name: 'Vessel', exact: true }).fill('ilcs');
  await page1.getByRole('gridcell', { name: 'KAPAL ILCS' }).click();
  await page1.getByRole('heading', { name: 'Voyage Information', exact: true }).click();
  await page1.getByRole('textbox', { name: 'OPR In Voyage' }).click();
  await page1.getByRole('textbox', { name: 'OPR In Voyage' }).fill('ilcs');
  await page1.getByRole('textbox', { name: 'OPR In Voyage' }).press('CapsLock');
  await page1.getByRole('textbox', { name: 'OPR In Voyage' }).fill('ILCS01');
  await page1.getByRole('textbox', { name: 'OPR In Voyage' }).press('Tab');
  await page1.getByRole('textbox', { name: 'OPR Out Voyage' }).fill('ILCS01');
  await page1.getByRole('combobox', { name: 'Berthing Purpose*' }).click();
  await page1.getByRole('gridcell', { name: 'Cargo Operation' }).click();
  await page1.getByRole('combobox', { name: 'Service Lane(In)' }).click();
  await page1.getByRole('combobox', { name: 'Service Lane(In)' }).fill('ILCS');
  await page1.getByRole('gridcell', { name: 'ILCS' }).nth(1).click();
  await page1.getByRole('combobox', { name: 'Service Lane(Out)' }).click();
  await page1.getByRole('combobox', { name: 'Service Lane(Out)' }).fill('ILCS');
  await page1.getByRole('gridcell', { name: 'ILCS' }).nth(1).click();
  await page1.getByRole('combobox', { name: 'Calling Type*' }).click();
  await page1.getByRole('gridcell', { name: 'TRAMPER' }).click();
  await page1.getByRole('combobox', { name: 'Berth Group' }).click();
  await page1.getByRole('gridcell', { name: 'B3' }).click();
  await page1.locator('#voyageDetailWidgetBody').getByRole('button').filter({ hasText: /^$/ }).click();
  await page1.locator('[id="1786431866188"]').click();
  await page1.getByRole('button', { name: 'Calculation' }).click();
  await page1.getByRole('dialog').getByRole('button').filter({ hasText: /^$/ }).click();
  await page1.locator('.webix_view > .webix_view.webix_control.webix_el_datepicker > .webix_el_box > .webix_input_icon').first().click();
  await page1.getByRole('button', { name: 'Today' }).click();
  await page1.locator('div:nth-child(2) > .webix_view.webix_control.webix_el_datepicker > .webix_el_box > .webix_input_icon').first().click();
  await page1.getByRole('button', { name: 'Today' }).click();
  await page1.locator('div:nth-child(3) > .webix_view.webix_control.webix_el_datepicker > .webix_el_box > .webix_input_icon').first().click();
  await page1.getByRole('button', { name: 'Today' }).click();
  await page1.locator('[id="1786431863131"]').click();
  await page1.locator('[id="1786431863131"]').fill('0100');
  await page1.locator('[id="1786431863135"]').click();
  await page1.locator('[id="1786431863135"]').fill('0200');
  await page1.locator('[id="1786431863139"]').click();
  await page1.locator('[id="1786431863139"]').fill('2300');
  await page1.getByRole('textbox', { name: 'Est.Volume(Teu\'s)' }).click();
  await page1.getByRole('textbox', { name: 'Est.Volume(Teu\'s)' }).fill('6666');
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('button', { name: 'Save' }).click();
  await page1.getByRole('button', { name: 'Save' }).dblclick();
  await page1.getByRole('button', { name: 'OK' }).click();
  await page1.getByText(' Voyage Information VesselVoyageILCS-0013 (ILCS01) ').click(); 
  */


  await page.pause();
});