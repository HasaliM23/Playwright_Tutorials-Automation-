const {test,expect}=require('@playwright/test')

test('Bootsrap DropDown ', async({page})=>{


    await page.goto("https://mdbootstrap.com/docs/standard/extended/multiselect/")

    await page.locator("//input[@id='select-input-444820']").click()

    //1

    const options = await page.locator("(//input[@type='checkbox'])[13]")
    await expect(options).toHaveCount(6)

    await page.waitForTimeout(3000);
})