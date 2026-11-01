import { test, expect } from '@playwright/test';

test.describe('Страница Еноты (Википедия)', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://ru.wikipedia.org/wiki/Еноты', { waitUntil: 'domcontentloaded' });
  });

  test('Проверка наличия ключевых текстов на странице', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1, name: 'Еноты' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Название' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Общие особенности' })).toBeVisible();
    
    await expect(page.getByText(/обитатели Америки/i).first()).toBeVisible();
  });
});