const {test,expect}=require('@playwright/test')

test('Handle Drop Down',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Multiple ways of selecting drop down options

    //1. using label

    await page.locator("#country").selectOption({label:"United Kingdom"});

    await page.waitForTimeout(3000) //Pause for 5 seconds to see the result

    //2. Using visible text

    await page.locator("#country").selectOption("India");

    await page.waitForTimeout(3000) //Pause for 5 seconds to see the result

    //3. Using value attribute

    await page.locator("#country").selectOption({value:"usa"});

    await page.waitForTimeout(3000) //Pause for 5 seconds to see the result

    //4. Using index

    await page.locator("#country").selectOption({index:8}); //selecting Brazil

    await page.waitForTimeout(3000) //Pause for 5 seconds to see the result

    //Assertions

    //1. check number of options in drop down

    const options = await page.locator("#country option")

    await expect(options).toHaveCount(10);







})