const {test,expect}=require('@playwright/test');

test('Mouse Hover',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    //Mouse Hover

  const pointMe=  await page.locator("//button[.='Point Me']")

 const mobile = await page.locator("//a[.='Mobiles']")

 await pointMe.hover();
 await mobile.hover();

 await page.waitForTimeout(5000);
    

});