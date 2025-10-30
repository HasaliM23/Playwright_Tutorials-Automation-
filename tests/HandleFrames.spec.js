const {test,expect}=require('@playwright/test');

test('Handle the frames',async({page})=>{


    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total frames

    const allframes = await page.frames()
    console.log("Total Number of frames",allframes.length)

    //Approach 1 -using name or URL


   //const frame1 = await page.frame('name') if name is present

   //const frame1= await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
   //await frame1.fill("[name='mytext1']",'Welcome to Frame 1');


   //Approach 2 - using locator

   const inputBox = await page.frameLocator("//frame[@src='frame_1.html']").locator("[name='mytext1']")
   inputBox.fill('Welcome to Frame 1 using frame locator');

   await page.waitForTimeout(5000);



})
