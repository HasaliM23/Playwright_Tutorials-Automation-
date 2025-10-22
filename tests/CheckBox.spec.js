const {test , expect}= require('@playwright/test');


test('Handle Check Box',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //single check box

    await page.locator("//input[@id='monday']").check();

    //Verify single check box is checked

    await expect(await page.locator("//input[@id='monday']")).toBeChecked();

    // is single check box checked?

    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeTruthy();


    //Multiple check boxes

    const checkBoxLocators = [
        "//input[@id='monday']",
        "//input[@id='friday']",
        "//input[@id='sunday']"
    ];

    for(const locator of checkBoxLocators){

        await page.locator(locator).check();

    }

       await page.waitForTimeout(5000) //Pause for 5 seconds to see the result

    //Uncheck multiple check boxes which are already checked

    for(const locator of checkBoxLocators){

        if(await page.locator(locator).isChecked()){

             await page.locator(locator).uncheck();
        }
       

    }


    await page.waitForTimeout(5000) //Pause for 5 seconds to see the result

   

    // Uncheck only Sunday
  if (await page.locator("//input[@id='sunday']").isChecked()) {
    await page.locator("//input[@id='sunday']").uncheck();
  }

  await page.waitForTimeout(5000) //Pause for 5 seconds to see the result
})