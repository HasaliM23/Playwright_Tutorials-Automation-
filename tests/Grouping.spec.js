import {test,expect} from '@playwright/test'

test.beforeAll(async()=>{

    console.log('this is before all Hook')
})

test.afterAll(async()=>{

    console.log('this is after all Hook')
})

test.beforeEach(async()=>{

    console.log('this is before each Hook')
})

test.afterEach(async()=>{

    console.log('this is after each Hook')
})

test.describe.only('Group1',()=>{

    test('Test1',async({page})=>{

    console.log('This is my test 1')
});

test('Test2',async({page})=>{

    console.log('This is my test 2')
});


})

test.describe('Group2',()=>{

    test('Test3',async({page})=>{

    console.log('This is my test 3')
});

test('Test4',async({page})=>{

    console.log('This is my test 4')
});



})




