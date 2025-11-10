exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.locator("//a[.='Log in']");
        this.usernameInput = page.locator("#loginusername");
        this.passwordInput = page.locator("#loginpassword");
        this.loginButton = page.locator("//button[.='Log in']");
    }

    async gotoLoginPage() {
        await this.page.goto('https://demoblaze.com/');
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
};
