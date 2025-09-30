import { Page, Locator, expect } from '@playwright/test';

export class HandbookPage {
  readonly page: Page;
  readonly handbook: Locator;
  readonly sidebar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.handbook = page.locator('#tab3');
    this.sidebar = page.locator('nav[id="sidebar"]');
  }

  // 開啟 handbook 入口並同時驗證頁面已開啟
  async openHandbook(): Promise<void> {
    await this.handbook.click();
  }

  // 取得目標章節的連結 locator（方便被外部調用)
  getTopicLink(topic: string): Locator {
    return this.sidebar.getByRole('link', { name: topic });
  }

  // 取得標題 locator（讓測試可以做斷言）
  getHeadingLocator(topic: string): Locator {
    return this.page.getByRole('heading', { name: topic, exact: true });
  }

  // 斷言：標題可見（封裝常用驗證)
  async expectHeadingVisible(topic: string): Promise<void> {
    await expect(this.getHeadingLocator(topic)).toBeVisible();
  }

  // 進入指定章節頁面（包含點擊與等待頁面顯示)
  async goToTopic(topic: string): Promise<void> {
    await this.handbook.click();
    await this.page.waitForLoadState('load');
    await this.expectHeadingVisible('The TypeScript Handbook');
    const link = this.getTopicLink(topic);
    await link.click();
  }
}
