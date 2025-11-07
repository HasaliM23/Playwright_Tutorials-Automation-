const {test,expect} =require('@playwright/test');

test('File Upload Test',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/UploadFiles/User.png");

    await page.waitForTimeout(5000);

    // choose file click karawita thwath box ekk open wenaawa nm , ( like drag and drop box)

    //await page.locator("drag box eke locator").setInputFiles("tests/UploadFiles/User.png");





});


    //Multiple File Upload

test.only('Multiple File Upload Test',async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("//input[@id='filesToUpload']").setInputFiles([
        "tests/UploadFiles/User.png",
        "tests/UploadFiles/telephone.png"
    ]);

    await page.waitForTimeout(5000);

    //Assertion

    expect(await page.locator("//li[.='telephone.png']")).toHaveText('telephone.png');
    expect(await page.locator("//li[.='User.png']")).toHaveText('User.png');


    

});