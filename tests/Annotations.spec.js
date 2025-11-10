import{test,expect}from'@playwright/test'

//Only annotation - this test will be executed

/*test.only('Test1 only annotation',async({page})=>{

    console.log('This is my test 1')


 }); */

 //Skip annotation - this test will be skipped

/*test.skip('Test2 Skip Annotaion',async({page})=>{
    console.log('This is my test 2')

}); */

// Another Skip annotation example based on condition

/*test('Test 3',async({page,browserName})=>{

    console.log('This is my test 3')
    if(browserName==='chromium'){
        test.skip();
    }

});  */

//Fixme annotation - this test will be marked as to be fixed

/*test('Test 4 Fixme Annotation',async({page})=>{

    test.fixme();

    console.log('This is my test 4')

}); */

//Fail annotation - this test is expected to fail

/*test('Test 5 Fail Annotation',async({page})=>{

    test.fail()
    console.log('This is my test 5')
    expect(1).toBe(1);

 
});  */

//Slow annotation - this test is expected to be slow

//Mekedi playwright configuration file eke timout eka 1000 dala sv krala run krama test eka fail wenwa , a nisa slow()
// annotation eka dila sv krama run krama pass wenawa, time eka 3x walin wadi wenwa , 1000 nam 3000 wenawa

test('Test 6 Slow Annotation',async({page})=>{
    test.slow();

    await page.goto('https://demoblaze.com/')

    console.log('Test 6');

});


