class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(username, password) {
    await this.page.goto('https://customer-portal-qa.ilcs.co.id/login');
    //await this.page.waitForLoadState('networkidle');
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password); // ⬅️ added
    await this.page.locator('div.btn.btn-primary').click();
    await this.page.waitForLoadState('networkidle');
  }
}

module.exports = { LoginPage };