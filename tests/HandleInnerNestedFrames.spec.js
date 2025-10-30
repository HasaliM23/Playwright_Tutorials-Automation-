const {test,expect}=require('@playwright/test');
const { url } = require('inspector');

test('Handle the Inner/Nested Frames',async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    //frame3.locator("//input[@name='mytext3']").fill('Welcome to Frame 3');

    //nested frame

    const childFrame = await frame3.childFrames()
    await childFrame[0].locator("//*[@id='i6']/div[3]/div").check()



    await page.waitForTimeout(5000);



});