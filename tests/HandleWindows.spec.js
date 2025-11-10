const {test,expect,chromium} = require('@playwright/test');

test('Handle Windows',async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext();

    const page = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log("Number of pages Created: "+allPages.length);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/');

    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');


});

test('Handle Multiple Pages/ Windows',async()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page.locator('a:has-text("OrangeHRM, Inc")').click();

    const newPage = await pagePromise;

    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM');

    await page.waitForTimeout(3000);

    await newPage.waitForTimeout(3000);



});

test.only('test',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForTimeout(3000);

    await page.locator('a:has-text("OrangeHRM, Inc")').click();

     //await page.pause()

});