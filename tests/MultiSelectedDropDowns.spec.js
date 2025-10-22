const {test,expect}=require('@playwright/test')

test('Handle Multi selected Drop Down',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Selecting multiple options from multi select drop down - Method 1

    await page.selectOption("#colors",['Blue','Red','Yellow'])

    await page.waitForTimeout(5000) //Pause for 5 seconds to see the result

    //Selecting multiple options from multi select drop down - Method 2

    await page.locator("#colors").selectOption(['White','Green'])

    await page.waitForTimeout(5000) //Pause for 5 seconds to see the result


    //Assertions

    //1. check number of options in drop down

    const options = await page.locator("#colors option")
    await expect(options).toHaveCount(7);

    await page.waitForTimeout(5000)

  //Check number of options in dropdown using js array

  const options1 = await page.$$("#colors option")
  console.log("Number of options: ", options1.length)
  await page.waitForTimeout(3000)

  //2. check presence of value in the drop down

  const content = await page.locator("#colors").textContent();

  await expect(content.includes("Red")).toBeTruthy();

  


})