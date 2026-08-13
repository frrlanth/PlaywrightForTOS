class TosnusLoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    // ⬅️ go to page FIRST
    await this.page.goto('https://tosqa-nusantara.ilcs.co.id/mtos/mainpage/mainpage.mtos?TMNL=TP1Z3');
   // await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000); // wait for page to fully render

    // ⬅️ use placeholder since the textbox name might not match exactly
    await this.page.getByPlaceholder('Enter Your Username ......').fill(username);
    await this.page.getByPlaceholder('Enter Your Password ......').fill(password);
    await this.page.getByRole('button', { name: 'CONTINUE' }).click();

    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForTimeout(2000); // wait for dashboard to load after login
  }
}

module.exports = { TosnusLoginPage };