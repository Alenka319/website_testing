# website_testing

E2E-тесты на Playwright для https://playwright.dev.

## Что покрыто
1. **Проверка текстов** — заголовок H1, ссылки Docs/API, кнопка «Get started».
2. **Интерактив + форма поиска** — открытие поиска, ввод «locator», список результатов, переход по клику.
3. **Навигация** — переход на `/intro` и `/docs/writing-tests`.

## Установка
```bash
npm install
npm test
