import { test, devices, expect } from "@playwright/test";

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";


test.use({
    browserName: "chromium",
    ...devices["iPad Air"],
    viewport: { width: 820, height: 1180 },
});

test.describe("Testing for home Tablet", () => {
    test("Count img", async ({ page }) => {
        await page.goto(urlarts);

        await expect(page.locator("div >  div >img")).toHaveCount(43);
    });

    test("Count a", async ({ page }) => {
        await page.goto(urlarts);

        await expect(page.locator("div > div > a ")).toHaveCount(43);
    });
});