import{test,expect}from'@playwright/test'

//Only annotation - this test will be executed

/*test.only('Test1 only annotation',async({page})=>{

    console.log('This is my test 1')


 }); */

 //Skip annotation - this test will be skipped

test.skip('Test2 Skip Annotaion',async({page})=>{
    console.log('This is my test 2')

});

