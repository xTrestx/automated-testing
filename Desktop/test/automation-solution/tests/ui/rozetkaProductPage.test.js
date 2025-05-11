const puppeteer = require('puppeteer');

describe('Rozetka Category Navigation UI Tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized'],
      timeout: 60000,
    });
    page = await browser.newPage();
    await page.goto('https://rozetka.com.ua', { waitUntil: 'networkidle2' });
  }, 60000);

  afterAll(async () => {
    await browser.close();
  });


  test('should open the search popup when clicking the search button', async () => {
    // Чекаємо на кнопку пошуку
    await page.waitForSelector('body > rz-app-root > div > div.outlet-wrapper > rz-main-header > header > div > div > div.header-search > rz-search-suggest > form > div.search-form > div > div > input', { timeout: 10000 });

    // Натискаємо на кнопку пошуку
    const searchButton = await page.$('body > rz-app-root > div > div.outlet-wrapper > rz-main-header > header > div > div > div.header-search > rz-search-suggest > form > div.search-form > div > div > input');
    await searchButton.click();

    // Перевіряємо, чи відкрилась форма пошуку
    const searchForm = await page.$('.search-form');
    expect(searchForm).toBeTruthy();
  });
});