const {test,expect} = require('@playwright/test');


//list - npx playwright test Reporter.spec.js --project chromium --headed  --reporter=list

//line - --reporter=line

//dot - --reporter=dot

//html - --reporter=html

//json - --reporter=json

//junit - --reporter=junit


test('Test 1', async ({page}) => {

    await page.goto('https://demoblaze.com/');

    await expect(page).toHaveTitle('STORE');


});

test('Test 2', async ({page}) => {

    await page.goto('https://demoqa.com/');

    


});