import { test, expect } from '@playwright/test';

test.describe('Переход на другую страницу', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://ru.wikipedia.org/wiki/Еноты', { waitUntil: 'domcontentloaded' });
  });

  test('Переход по ссылке из текста на статью "Енотовые"', async ({ page }) => {
    const familyLink = page.getByRole('link', { name: 'Енотовые' }).first();
    
    await familyLink.scrollIntoViewIfNeeded();
    await familyLink.click();

    await expect(page.getByRole('heading', { level: 1, name: 'Енотовые' })).toBeVisible();
  });
});