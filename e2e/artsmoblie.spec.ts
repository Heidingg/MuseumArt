import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";
test.use({
    browserName: "chromium",
    ...devices["iPhone XR"],
});

test.describe("Testing for mobile viewport for iPhone XR", () => {
    
    test("Testing for colours on iPhone XR", async ({ page }) => {
        await page.goto(urlarts);

        const h1 = page.locator("h1");

        const checkh1color = await h1.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("color");
        });

        console.log(checkh1color);
        expect(checkh1color).toBe("rgb(244, 202, 22)");
    });

    test("Testing for count item colors on iPhone XR", async ({ page }) => {
        await page.goto(urlarts);
        await expect(page.locator(' div > div > p')).toHaveCount(43);
    });
});