const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/LoginPage');

test('login with username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('tanto.dhu', 'Parama123!'); // ⬅️ add password here

  const date = new Date();
  date.setDate(date.getDate() + 7); //UNTUK DELIVERY DATE HARI INI + 7 HARI KEDEPAN
  const formattedDate = date.toISOString().split('T')[0]; // formats as YYYY-MM-DD

  function generateContainerNumber() {
  const prefix = 'DHUU';
  const digits = Math.floor(1000000 + Math.random() * 9000000);
  return `${prefix}${digits}`;
}
  
   await page.locator('div').filter({ hasText: /^layanan pelabuhan$/ }).click();
  await page.getByText('RECEIVING', { exact: true }).click();

  await page.getByLabel('Nomor Dokumen').click();
  await page.getByLabel('Nomor Dokumen').fill('TANTODHu');
  await page.getByText('Pilih Dokumen').click();
  await page.getByLabel('Pilih Dokumen').setInputFiles('C:\\Users\\ILCS\\Downloads\\E_TICKET_REC260000007909 (2).pdf');
  await page.getByRole('textbox', { name: 'Cari/Ubah Kapal' }).click();
  await page.locator('input[name="vesselName"]').fill('tanto bersama');
  await page.locator('input[name="voyageIn"]').click();
  await page.locator('input[name="voyageIn"]').fill('137'); // Voyage IN
  await page.locator('input[name="voyageOut"]').click();
  await page.locator('input[name="voyageOut"]').fill('TATTDt'); //Voyage Out
  await page.getByText('VOY OUT').click();

  await page.getByRole('textbox', { name: 'POD', exact: true }).click();
  await page.locator('div').filter({ hasText: /^IDBDJ; BANJARMASIN$/ }).first().click();
  await page.locator('div:nth-child(2) > .false.relative > svg').click();
  await page.getByRole('textbox', { name: 'FPOD' }).click();
  await page.locator('div').filter({ hasText: /^IDSOR; SORONG$/ }).first().click();
  await page.locator('#headlessui-disclosure-panel-26').getByRole('textbox', { name: 'Nomor Dokumen' }).fill('124214214141241');
  await page.getByRole('button', { name: 'Tambah Dokumen' }).click();
  
   const containerNumber = generateContainerNumber(); // e.g. HAHU4445551
  console.log('Container Number:', containerNumber); // print to terminal so you can see it

  await page.getByRole('button', { name: 'Tambah Container Tambah' }).click();

  // ⬅️ Loop 10 times to add 10 containers
  for (let i = 1; i <= 10; i++) {
    const containerNumber = generateContainerNumber();
    console.log(`Container ${i}: ${containerNumber}`); // prints each one in terminal

    await page.getByRole('button', { name: 'Tambah Container Tambah' }).click();

    await page.getByRole('textbox', { name: 'Nomor Kontainer' }).fill(containerNumber);
    await page.locator('#createisoCode').selectOption('22G1-20-DRY-8.5');
    await page.locator('#createcontainerStatus').selectOption('FULL');
    await page.getByRole('textbox', { name: 'Commodity' }).fill('GENERAL CARGO');
    await page.locator('#createoperator').selectOption('TNT-TANTO INTIM LINE');
    await page.getByPlaceholder('Weight (KG)').fill('15000');
    await page.locator('div').filter({ hasText: /^Tambah Kontainer$/ }).nth(1).click();

    // ⬅️ Click save/confirm button after each container before looping again
    // await page.getByRole('button', { name: 'Simpan' }).click();
    // await page.waitForTimeout(500);
  }
});