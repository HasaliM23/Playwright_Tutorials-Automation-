const {test,expect}=require('@playwright/test')

test('AssertionsTest2',async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form")


    //5 expect(locator).toBeChecked   Radio button and Checkbox is checked

    const maleRadioBtn = page.locator("//label[.='Male']")
    maleRadioBtn.click()
    await expect(maleRadioBtn).toBeChecked()

    const sportcheckBox = page.locator("//label[.='Sports']")
    sportcheckBox.click()
    await expect(sportcheckBox).toBeChecked()


})