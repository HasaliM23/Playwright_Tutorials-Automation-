const {test,expect}=require('@playwright/test');


test.skip ('Alerts',async({page})=>{

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


test.skip ('Confirmation Dailog with OK and Cancel',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handelr

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //alert box close using Ok Button
        //await dialog.dismiss(); //alert box close using Cancel Button




    }) 

    await page.click("//button[@id='confirmBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000)

});


test('Prompt Dialog',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Enabling dialog window handelr

    page.on('dialog',async dialog=>{

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('Eion'); 




    }) 

    await page.click("//button[@id='promptBtn']");

    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Eion! How are you today?')
    await page.waitForTimeout(5000)

});