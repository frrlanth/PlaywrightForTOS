class TanosLoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('https://tanos.pelindo.co.id/login');
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { TanosLoginPage };