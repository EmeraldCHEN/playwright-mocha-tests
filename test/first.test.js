// const { expect } = require('chai');
// const { chromium } = require('playwright');

// describe('Playwright with Mocha', function() {
//   let browser;
//   let page;

//   before(async function() {
//     // Launch a browser before tests
//     browser = await chromium.launch();
//   });

//   beforeEach(async function() {
//     // Create a new page for each test
//     page = await browser.newPage();
//   });

//   afterEach(async function() {
//     // Close the page after each test
//     await page.close();
//   });

//   after(async function() {
//     // Close the browser after all tests
//     await browser.close();
//   });

//   it('should load the Playwright website', async function() {
//     await page.goto('https://playwright.dev');
//     const title = await page.title();
//     expect(title).to.include('Playwright');
//   });
// });


// const assert = require("assert");
// const playwright = require("playwright");

// describe("Playwright", () => {
//     let page;
//     let browser;
//     let context;

//     const BASE_URL = "https://mochajs.org";

//     beforeEach(async () => {
//         const { chromium } = playwright;
//         browser = await chromium.launch({ headless: true });
//         context = await browser.newContext();
//         page = await context.newPage(BASE_URL);
//         await page.goto(BASE_URL);
//     });

//     afterEach(async function() {
//         await browser.close();
//     });

//     it("should render mocha homepage", async () => {
//         const tagElement = await page.waitForSelector('[id=tag]');
//         const tagText = await tagElement.textContent()

//         assert.strictEqual(tagText, "simple, flexible, fun");
//     });
// });

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://playwright.dev');
  console.log(await page.title());
  await browser.close();
})();
