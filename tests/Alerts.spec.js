const {test,expect}=require('@playwright/test')

test('Alerts',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handelr

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();


    })

    await page.click("//button[.='Simple Alert']");
    await page.waitForTimeout(5000)

});