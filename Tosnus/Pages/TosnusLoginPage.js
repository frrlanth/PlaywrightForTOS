class TosnusLoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('https://tosqa-nusantara.ilcs.co.id/mtos/');
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { TosnusLoginPage };