const {test,expect}=require('@playwright/test');

test('Mouse Double Click',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    //Double Click

    const copyTextBtn = await page.locator("//button[.='Copy Text']")

    await copyTextBtn.dblclick();

   const f2 =  await page.locator('#field2')

   await expect(f2).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);




});
