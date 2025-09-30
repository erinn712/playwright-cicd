import { test } from '@playwright/test';
import { HandbookPage } from './pages/HandbookPage';

test.describe('TS Website', () => {
  // 宣告Page Object 實例
  let handbookPage: HandbookPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.typescriptlang.org/');
    // 在每個測試前都建立新的 Page Object 實例  
    handbookPage = new HandbookPage(page);
  });

  test('handbook page - has title', async ({ page }) => {
    // 前往 handbook page 的 The Basics，並驗證標題
    await handbookPage.goToTopic('The Basics');

    // 接續其他測試...
  });

  test('handbook page - via npm', async ({ page }) => {
    // 前往 handbook page 的 Narrowing，並驗證標題
    await handbookPage.goToTopic('Narrowing');

    // 接續其他測試...
  });

  test('handbook page - has header', async ({ page }) => {
    // 前往 handbook page 的 More on Functions，並驗證標題
    await handbookPage.goToTopic('More on Functions');

    // 接續其他測試...
  });
});
