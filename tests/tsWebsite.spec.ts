import { test, expect } from '@playwright/test';

test.describe('TS Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.typescriptlang.org/');
  });

  // handbook page 第 1 個測試：前往 handbook 裡的 The Basics
  test('handbook page - has title', async ({ page }) => {
    // 點擊 handbook tab，並驗證標題
    await page.locator('#tab3').click();
    await expect(page.getByRole('heading', { name: 'The TypeScript Handbook' })).toBeVisible();

    // 點擊 sidebar 裡的 The Basics，並驗證標題
    await page.locator('nav[id="sidebar"]').getByRole('link', { name: 'The Basics' }).click();
    await expect(page.getByRole('heading', { name: 'The Basics', exact: true })).toBeVisible();

    // 接續其他測試...
  });

  // handbook page 第 2 個測試：前往 handbook 裡的 Narrowing
  test('handbook page - via npm', async ({ page }) => {
    // 點擊 handbook tab，並驗證標題
    await page.locator('#tab3').click();
    await expect(page.getByRole('heading', { name: 'The TypeScript Handbook' })).toBeVisible();

    // 點擊 sidebar 裡的 Narrowing，並驗證標題
    await page.locator('nav[id="sidebar"]').getByRole('link', { name: 'Narrowing' }).click();
    await expect(page.getByRole('heading', { name: 'Narrowing', exact: true })).toBeVisible();

    // 接續其他測試...
  });

  // handbook page 第 3 個測試：前往 handbook 裡的 More on Functions
  test('handbook page - has header', async ({ page }) => {
    // 點擊 handbook tab，並驗證標題
    await page.locator('#tab3').click();
    await expect(page.getByRole('heading', { name: 'The TypeScript Handbook' })).toBeVisible();

    // 點擊 sidebar 裡的 More on Functions，並驗證標題
    await page.locator('nav[id="sidebar"]').getByRole('link', { name: 'More on Functions' }).click();
    await expect(page.getByRole('heading', { name: 'More on Functions', exact: true })).toBeVisible();

    // 接續其他測試...
  });
});
