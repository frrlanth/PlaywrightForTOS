const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/LoginPage');

test('login with username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('tanto.dhu', 'Parama123!'); // ⬅️ add password here

  const date = new Date();
  date.setDate(date.getDate() + 7); //UNTUK DELIVERY DATE HARI INI + 7 HARI KEDEPAN
  const formattedDate = date.toISOString().split('T')[0]; // formats as YYYY-MM-DD
  
  await page.locator('div').filter({ hasText: /^layanan pelabuhan$/ }).click();
  await page.getByText('DELIVERY', { exact: true }).click();

  await page.getByRole('textbox', { name: 'Nomor Dokumen' }).click();
  await page.getByRole('textbox', { name: 'Nomor Dokumen' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Nomor Dokumen' }).fill('ABCDE');
  await page.getByRole('textbox', { name: 'Tanggal Kadaluarsa DO' }).fill(formattedDate);
  await page.getByRole('textbox', { name: 'N/A' }).click();
  await page.getByRole('textbox', { name: 'N/A' }).fill('sadsafsafasfasfsaf');
  await page.getByLabel('Pilih Dokumen').setInputFiles('C:\\Users\\ILCS\\Downloads\\E_TICKET_REC260000007909 (2).pdf');
  //await page.getByRole('button', { name: 'Informasi Delivery Silahkan' }).click();

  await page.locator('button').filter({ hasText: 'Informasi Delivery' }).first().click();

  //await page.locator('#headlessui-disclosure-panel-17 > .divider').click(); //INI KALO MAU PILIH DELIVERY DATE YANG TODAY
  await page.getByRole('textbox', { name: 'Tanggal Delivery' }).fill('2026-07-04')
  await page.getByRole('button', { name: 'Informasi Delivery Silahkan' }).click();

  await page.getByText('Kapal*Silahkan pilih kapal Anda disiniKapal*Silahkan pilih kapal Anda disini').click();
  await page.getByText('Kapal*Silahkan pilih kapal Anda disiniKapal*Silahkan pilih kapal Anda disini').dblclick();
  await page.getByRole('button', { name: 'Kapal* Silahkan pilih kapal' }).click();
  await page.locator('#headlessui-disclosure-panel-20 > .grid').click();
  await page.locator('input[name="vesselName"]').click();
  await page.locator('input[name="vesselName"]').fill('ILCS');
  await page.locator('input[name="voyageIn"]').click();
  await page.locator('input[name="voyageIn"]').fill('CHECK');
  await page.locator('input[name="voyageIn"]').click();
  await page.getByText('KAPAL ILCSVOY INVOY OUT::CHECKJ1ETA01-06-2026 02:11ETD02-07-2026 20:00Closing').click();

  await page.pause();
});