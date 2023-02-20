import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";

test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    
    test('Img size', async({ page }) => { 
        await page.goto(urlHome)

        const img = page.locator('img');

        const imgheight = await img.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })
        console.log(imgheight);
        expect(imgheight).toBe("400px");
        const imgwidth = await img.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("width")
        })
        console.log(imgwidth);
        expect(imgwidth).toBe("400px");
    })

    test.describe('Check about page navigates to another page', () => {
        test('Should navigate to Arts page from homepage', async ({ page}) => {
            await page.goto(urlHome);
            await expect(page.locator('div > a > span')).toHaveCount(1);
        })
    })
});