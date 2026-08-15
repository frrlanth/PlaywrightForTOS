const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./Pages/LoginPage');

test('login with username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('tanto.dhu', 'Parama123!'); // ⬅️ add password here

  await page.evaluate(() => {
  document.body.style.zoom = "0.6";}); //80% ZOOM BROwser


  const date = new Date();
  date.setDate(date.getDate() + 7); //UNTUK DELIVERY DATE HARI INI + 7 HARI KEDEPAN
  const formattedDate = date.toISOString().split('T')[0]; // formats as YYYY-MM-DD

  function generateContainerNumber() {
  const prefix = 'AUTO'; // Prefix for the container number
  const digits = Math.floor(1000000 + Math.random() * 9000000);
  return `${prefix}${digits}`;
}
  
   await page.locator('div').filter({ hasText: /^layanan pelabuhan$/ }).click();
  await page.getByText('RECEIVING', { exact: true }).click();

  await page.getByLabel('Nomor Dokumen').click();
  await page.getByLabel('Nomor Dokumen').fill('TANTODHu');
  //await page.getByText('Pilih Dokumen').click();
  await page.getByLabel('Pilih Dokumen').setInputFiles('C:\\Users\\ILCS\\Downloads\\E_TICKET_REC260000007909 (2).pdf');
  await page.getByRole('textbox', { name: 'Cari/Ubah Kapal' }).click();
  await page.locator('input[name="vesselName"]').fill('CIPU CORAL'); //Veseel NamE
  await page.locator('input[name="voyageIn"]').click();
  await page.locator('input[name="voyageIn"]').fill('CIPUSEE'); // Voyage IN
  await page.locator('input[name="voyageOut"]').click();
  await page.locator('input[name="voyageOut"]').fill('CIPUSEE'); //Voyage Out
  await page.getByText('VOY OUT').click();

  await page.getByRole('textbox', { name: 'POD', exact: true }).click();
 // await page.getByRole('option').first().click();
  await page.locator('div').filter({ hasText: /^IDBIT; BITUNG$/ }).first().click();
  await page.locator('div:nth-child(2) > .false.relative > svg').click();
  //await page.pause  ();
  await page.waitForTimeout(1000)
  await page.getByRole('textbox', { name: 'FPOD' }).click();
  await page.locator('div').filter({ hasText: /^IDSOR; SORONG$/ }).nth(2).click();

  await page.locator('#headlessui-disclosure-panel-23').getByRole('textbox', { name: 'Nomor Dokumen' }).click();
  await page.locator('#headlessui-disclosure-panel-23').getByRole('textbox', { name: 'Nomor Dokumen' }).fill('haheho');
  await page.getByRole('button', { name: 'Tambah Dokumen' }).click();


  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.locator('.border.border-\\[\\#BDBDBD\\].bg-\\[\\#ECF7FD\\]').click();
  await page.getByRole('button', { name: 'Tambah Container Tambah' }).click();
  await page.getByRole('button', { name: 'Tambah Container Tambah' }).click();


  await page.getByRole('textbox', { name: 'Nomor Kontainer' }).click();
  
   const containerNumber = generateContainerNumber(); // e.g. HAHU4445551
  console.log('Container Number:', containerNumber); // print to terminal so you can see it

  await page.getByRole('button', { name: 'Tambah Container Tambah' }).click();


  // ⬅️ Loop 10 times to add 10 containers
  for (let i = 1; i <= 10; i++) {
    const containerNumber = generateContainerNumber();
    console.log(`Container ${i}: ${containerNumber}`); // prints each one in terminal

    await page.getByRole('textbox', { name: 'Nomor Kontainer' }).click();
    await page.getByRole('textbox', { name: 'Nomor Kontainer' }).fill(containerNumber);
    await page.locator('#createisoCode').selectOption('22G1-20-DRY-8.5');
    await page.locator('#createcontainerStatus').selectOption('FULL');
    await page.getByRole('textbox', { name: 'Commodity' }).fill('GENERAL CARGO');
    await page.waitForTimeout(1000); // Wait for 1 second to ensure the previous action is completed
    await page.getByText('GENERAL CARGO').click();
    await page.locator('#createoperator').selectOption('TNT-TANTO INTIM LINE');
    await page.getByPlaceholder('Weight (KG)').fill('15000');
    await page.locator('div').filter({ hasText: /^Tambah Kontainer$/ }).nth(1).click();
    await page.getByRole('button', { name: 'OK' }).click();

    // ⬅️ Click save/confirm button after each container before looping again
    // await page.getByRole('button', { name: 'Simpan' }).click();
  }

    await page.getByRole('button', { name: 'Tambah Container Tambah' }).click();

    await page.getByRole('button', { name: 'Kirim Permohonan' }).click();

    await page.getByRole('button', { name: 'Lanjutkan' }).click();

    await page.waitForTimeout(5000); // Wait for 1 second to ensure the previous action is completed


    
    const page2 = await page.context().newPage();// give it extra time to render

    await page2.goto('https://prayaqa.ilcs.co.id/login');
    await page2.waitForTimeout(4000); // give it extra time to render
    await page2.getByRole('textbox').first().fill('admin_tpk');
    await page2.getByRole('textbox').first().press('Tab');
    await page2.locator('input[type="password"]').click();
    await page2.locator('input[type="password"]').fill('Sb123456!');
    await page2.getByRole('textbox', { name: 'Enter Captcha' }).click();
    await page2.getByRole('textbox', { name: 'Enter Captcha' }).fill('32');
  await page2.getByRole('button', { name: 'Sign In' }).click();
  await page2.locator('.fas.fa-chevron-down').click();
  await page2.getByText('Tanjung Priok 1 Zona 3').click();
  await page2.getByRole('link', { name: ' Bill & Payment' }).click();
  await page2.locator('.checkbox > span').first().click();
  await page2.getByRole('button', { name: ' PAY' }).click();
  await page2.getByRole('img', { name: 'Cash / Transfer' }).click();
  await page2.locator('#bank').selectOption('130008');
  await page2.locator('input[name="paymentDate"]').fill('2026-08-11');
  await page2.getByRole('button', { name: 'Browse file' }).click();
  await page2.getByLabel('Browse file').setInputFiles('C:\\Users\\ILCS\\Downloads\\E_TICKET_REC260000007909 (2).pdf');

  await page.pause();
});