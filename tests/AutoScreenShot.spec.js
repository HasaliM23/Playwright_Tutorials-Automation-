import {test,expect} from '@playwright/test'

test('Auto Screenshot Capture',async({page})=>{

    await page.goto('https://demoblaze.com/')

    await page.locator("//a[.='Log in']").click();

    await page.locator("#loginusername").fill("Maxdemo1");
    await page.locator("#loginpassword").fill("test123");

    await page.locator("//button[.='Log in']").click();




});