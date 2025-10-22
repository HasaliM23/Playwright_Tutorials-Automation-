const {test, expect }= require('@playwright/test')

test('Handle Radio Button',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Male Radio button 

    await page.locator("//input[@id='male']").check();

    //await page.check("//input[@id='male']");

    //Verify Male radio button is checked

    await expect(await page.locator("//input[@id='male']")).toBeChecked();

    // is male radio butto checked?

    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    //Female radio button not checked

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();





    await page.waitForTimeout(5000) //Pause for 5 seconds to see the result
})