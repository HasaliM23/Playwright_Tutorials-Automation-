const {test,expect}=require('@playwright/test');

test('Mouse Right Click Hover',async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    //Mouse Right Click

    const button = await page.locator("//span[.='right click me']")

    //right click action

    await button.click({button:'right'});

    await page.waitForTimeout(5000);





});