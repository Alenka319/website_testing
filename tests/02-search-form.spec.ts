import { test, expect } from '@playwright/test';

test.describe('Работа с формой поиска', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://ru.wikipedia.org/wiki/Еноты', { waitUntil: 'domcontentloaded' });
  });

  test('Поиск работает и переводит на другую статью', async ({ page }) => {
    const searchInput = page.locator('#searchInput');
    
    await expect(searchInput).toBeVisible();
    await searchInput.fill('Енот-полоскун');
    await searchInput.press('Enter');

    await expect(page.getByRole('heading', { level: 1, name: /Енот-полоскун/i })).toBeVisible();
  });
});