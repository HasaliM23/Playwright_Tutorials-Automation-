const { test, expect } = require('@playwright/test');

test('Auto Suggest DropDown', async ({ page }) => {

    await page.goto('https://phptravels.net/');

    const fromInput = page.locator("//input[@name='from']");

    // Type slowly instead of fill()
    await fromInput.click();
    await fromInput.type('Delhi', { delay: 100 });

    // Wait for the dropdown list to appear
    await page.waitForSelector("//button[.='NZM']", { timeout: 15000 });

    // Get all the options
    const options = await page.$$("//button[.='NZM']");

    for (const option of options) {
        const text = await option.textContent();
        if (text.includes('Delhi, India')) {
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
});
