const { test, expect } = require('@playwright/test');

test('Hidden DropDown', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Log in to the application
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    //navigate to the PIM module

    await page.locator("//a[.='PIM']").click();



    await page.waitForTimeout(5000);

    

})