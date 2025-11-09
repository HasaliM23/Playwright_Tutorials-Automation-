import {test,expect} from '@playwright/test'

test('Page Screenshot',async({page})=>{

    await page.goto('https://demoblaze.com/')

    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'HomePage.png'})



});

test('Full Page Screenshot',async({page})=>{


    await page.goto('https://demoblaze.com/')

    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Full Page.png',fullPage:true})

});

test.only('Element Screenshot',async({page})=>{

     await page.goto('https://demoblaze.com/')

    await page.locator("(//div[@class='card h-100'])[1]").screenshot({path:'tests/Screenshots/'+Date.now()+' Samsung galaxy s6.png'})



});