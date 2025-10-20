//terminal run command = npx playwright test tests/Assertions.spec.js --project chromium


const {test,expect}=require('@playwright/test')

test('AssertionsTest',async({page})=>{

    await page.goto("https://www.nopcommerce.com/en/register")

    //1 expect(page).toHaveURL    Page url

    await expect(page).toHaveURL('https://www.nopcommerce.com/en/register')

    //2 expect(page).toHaveTitle    Page Title

    await expect(page).toHaveTitle('Register - nopCommerce')

    //3 expect(locator).toBeVisible  Element visibility

    const logoElement = page.locator('.navigation-main-logo')
    await expect(logoElement).toBeVisible()

    //4 expect(locator).toBeEnabled   Element is enabled

    const firstnameInputBox = page.locator('#FirstName')
    await expect(firstnameInputBox).toBeEnabled()

    //6 expect(locator).toHaveAttribute   Element has attribute 

   const registerBtn = await page.locator('#register-button')
   expect(registerBtn).toHaveAttribute('type','submit')

   //7 expect(locator).toHaveText   Element match text -full text

   await expect(await page.locator('.page-title h1')).toHaveText('Register')

   //8 expect(locator).toContainText   Element match text -partial text


   await expect (await page.locator('.page-title h1')).toContainText('Reg')

   //9 expect(locator).toHaveValue   Element match value - input box value

  const email =  await page.locator('#Email')
  await email.fill('test@gmail,com')
  await expect(email).toHaveValue('test@gmail,com')

  //10 expect(locator).toHaveCount   Element count - number of elements

  const options = await page.locator('#CountryId option')
  await expect(options).toHaveCount(238)





})