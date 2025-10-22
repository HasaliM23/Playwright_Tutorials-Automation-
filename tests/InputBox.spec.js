const {test, expect} = require('@playwright/test')

test('Handle inputBox',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //input box visible

    await expect(page.locator("//input[@id='name']")).toBeVisible();

    //input box Empty

    await expect(page.locator("//input[@id='name']")).toBeEmpty();

    //input box editable

    await expect(page.locator("//input[@id='name']")).toBeEditable();

    //input box enabled

    await expect(page.locator("//input[@id='name']")).toBeEnabled();

    //Type text into input box

    page.locator("//input[@id='name']").fill("John")

    //page.fill("//input[@id='name']","John")

    await page.waitForTimeout(5000) //Pause for 5 seconds to see the result


})