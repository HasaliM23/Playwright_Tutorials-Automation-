const {test,expect}=require('@playwright/test')

test('soft Assertions',async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //Hard Assertion - mekedi one test case ekak fail unoth ithiri cases tika execute wenne na (if one fails rest will not execute)

    /*await expect(page).toHaveTitle('STORE123')

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html')

    //Logo visibility

    await expect(page.locator('.navbar-brand')).toBeVisible(); */


    //Soft Assertion - mekedi one test case ekak fail unata ithiri cases tika execute wenawa (if one test case is fails rest will also execute)

    await expect.soft(page).toHaveTitle('STORE123') 

    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')

    //Logo visibility

    await expect.soft(page.locator('.navbar-brand')).toBeVisible(); 


})
