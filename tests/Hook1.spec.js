const {test,expect} =require('@playwright/test');

let page;


test.beforeEach(async ({browser}) => {

    page = await browser.newPage();

    await page.goto("https://demoblaze.com/");

    //Login 

    await page.locator("#login2").click();

    await page.locator("#loginusername").fill("Maxdemo1")

    await page.locator("#loginpassword").fill("test123");

    await page.locator("//button[.='Log in']").click();

    

});

test.afterEach(async({})=>{


       //Logout

    await page.locator("//a[.='Log out']").click();
})

test('Home Page Test',async()=>{  // Gloabl varible ekk hadapu nisa page eka ain kara
 
    

    //Home Page

    const products = page.locator('.hrefch');

    await expect(products).toHaveCount(9);

 

    


});

test('Add Product Cart Test',async()=>{  // Gloabl varible ekk hadapu nisa page eka ain kara

    
    //Add Product to Cart

    await page.locator("//a[.='Samsung galaxy s6']").click();

    await page.locator("//a[.='Add to cart']").click();

    //Alert Handle

    page.on('dialog',async dialog=>{

        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();

    })




});