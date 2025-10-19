const {test, expect} = require('@playwright/test');

test('LocatingMultipleElements', async ({ page }) => {


  await page.goto('https://www.demoblaze.com/index.html');

  /*const links = await page.$$('a');

  for (const link of links) {

    const linkText = await link.textContent();
    console.log(linkText);

  } */

    //locating multiple products on the page and print the names
    
     // wait for products to load
  await page.waitForSelector("//div[@id='tbodyid']//div//h4//a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4//a")

    for(const product of products)
    {
        const productName = await product.textContent();
        console.log(productName);
    }

});