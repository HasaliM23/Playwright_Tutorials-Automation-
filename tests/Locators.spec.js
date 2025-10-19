import {test,expect} from '@playwright/test'

test('Locators',async ({page}) =>{

   await page.goto("https://www.demoblaze.com/index.html");

   //click the login button - property

   //await page.locator('id=login2').click()

   //second method

   await page.click('id=login2')

   //provide the user name -CSS

   //await page.locator('#loginusername').fill('Maxdemo1')

   await page.fill('#loginusername', 'Maxdemo1')

   //await page.type('#loginusername', 'Maxdemo1')

   //provide password -css

   await page.fill("input[id='loginpassword']" , 'test123')

   //click on Login Button

   await page.click("//button[.='Log in']")

   //verify logout presence

   const logoutlink = await page.locator("//a[.='Log out']")

   await expect(logoutlink).toBeVisible();

   await page.close()



})