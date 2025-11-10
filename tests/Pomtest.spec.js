import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('Test', async ({ page }) => {

    const login = new LoginPage(page);   
    await login.gotoLoginPage();
    await login.login('Maxdemo1', 'test123');

    await page.waitForTimeout(3000);
});
