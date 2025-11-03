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

  /*for(let i=0; i<await rows.count(); i++)
  {
    const row = rows.nth(i);
    const tds = row.locator('td')

    for(let j=0; j<await tds.count()-1; j++)

        {
            console.log(await tds.nth(j).textContent())
        }
  } */

        //read data from all the rows and columns

        const pages = await page.locator('.pagination li a')
        console.log("Total number of pages:",await pages.count())

        for(let p=0; p<await pages.count(); p++)
        {
            if(p>0)
                {
                    await pages.nth(p).click();
                }

                for(let i=0; i<await rows.count(); i++)
  {
    const row = rows.nth(i);
    const tds = row.locator('td')

    for(let j=0; j<await tds.count()-1; j++)

        {
            console.log(await tds.nth(j).textContent())
        }
  }
                
            
        }


  




   await page.waitForTimeout(5000);



})

/*async function selectProduct (rows,page,name){

    const matchRow = rows.filter({

        has: page.locator('td'),
        hasText:name
    })
   await matchRow.locator('input').check() 
}*/