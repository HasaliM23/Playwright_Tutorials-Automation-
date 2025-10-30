const {test,expect}= require('@playwright/test');

test('Handel the Table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/?m=1');

    //capture the table

    const table =await page.locator("(//table[@id='productTable'])[1]")

    //total number of rows and columns

   const columns= await table.locator('thead tr th')
   console.log("Total number of columns:",await columns.count())

    const rows= await table.locator('tbody tr')
   console.log("Total number of rows:",await rows.count())

   //Assertion for number of rows and columns

   expect(await columns.count()).toBe(4);
   expect(await rows.count()).toBe(5);


    //select the check box for product 4

  /*  const matchRow = rows.filter({

        has: page.locator('td'),
        hasText:'	Smartwatch'
    })
   await matchRow.locator('input').check() */

   //Select multiple check box reusable code

  // await selectProduct(rows,page,'Smartphone')
  // await selectProduct(rows,page,'Laptop')
  // await selectProduct(rows,page,'Tablet')

  //print all product details using loop

  




   await page.waitForTimeout(5000);



})

async function selectProduct (rows,page,name){

    const matchRow = rows.filter({

        has: page.locator('td'),
        hasText:name
    })
   await matchRow.locator('input').check()
}