const {test,expect}=require('@playwright/test');

test('Date Picker',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    //Date Picker

    const year='2024';
    const month='March';
    const date='24';

    await page.click("//input[@id='datepicker']"); //open the calander

    while(true){

        const currentYear=await page.locator('.ui-datepicker-year').textContent();
        const currentMonth=await page.locator('.ui-datepicker-month').textContent();

        if(currentYear==year && currentMonth==month){

            break;


        }

        //await page.locator("//a[@title='Next']").click()
        await page.locator("//a[@title='Prev']").click()



    }

    //Date selection without loop

    await page.click(`//a[@data-date='${date}']`);





    await page.waitForTimeout(3000);

});