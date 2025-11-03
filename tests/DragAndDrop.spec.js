const {test,expect}=require('@playwright/test');

test('Drag and Drop',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    //Drag and Drop

    const dragedBox = await page.locator("//div[@id='draggable']")
    const dropBox = await page.locator("//div[@id='droppable']")

    //Approach 1 

   /* await dragedBox.hover();
    await page.mouse.down();

    await dropBox.hover();
    await page.mouse.up();  */


    //Approach 2

    await dragedBox.dragTo(dropBox);


    await page.waitForTimeout(5000);






});