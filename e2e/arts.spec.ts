import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlarts = "http://localhost:3000/arts";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});


test('The meta tag', async ({ page }) => { 
    await page.goto(urlarts)
    
    const metaDescriptionOne = page.locator('meta[name="description"]')
    await expect(metaDescriptionOne).toHaveAttribute("content", "Images")
})

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlarts)

        await expect(page.locator('h1')).toContainText('Painting & Sculptures');
    })
})
