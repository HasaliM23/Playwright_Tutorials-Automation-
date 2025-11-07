const {test,expect }= require('@playwright/test');

test('Keyboard Action', async({page})=>{

    await page.goto("https://gotranscript.com/text-compare")

    await page.locator("//textarea[@name='text1']").fill('Welcome to QA Automation')

    //await page.type('name="text1"','Welcome to QA Automation')


    //Ctrl + A

    await page.keyboard.press('Control+A')

    //Ctrl + C

    await page.keyboard.press('Control+C')

    //Tab

    await page.keyboard.down('Tab') //press

    await page.keyboard.up('Tab') //Release

    //Ctrl + V

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);



});