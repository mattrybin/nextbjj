const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

Given('I am on the {string} page', async (string) => {
    switch (string) {
        case "home":
            return await page.goto('http://localhost:3000')
        default:
            throw new Error(`${string} is not a supported page name`)
    }
});

Given('a user has navigated to the homepage', async () => {
    await page.goto(url)
    const locator = await page.locator(homepageElement)
    await expect(locator).toBeVisible()
});

Then('I should be on the {string} page', { timeout: 5000 }, async (string) =>
    Boolean(await page.waitForSelector(`[data-test="${string}"]`))
);