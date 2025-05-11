const puppeteer = require('puppeteer');

describe('Rozetka E2E тести', () => {
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

  test('Пошук товару "ноутбук"', async () => {
    await page.waitForSelector('input[name="search"]');
    await page.type('input[name="search"]', 'ноутбук');
    await page.click('button.search-form__submit');
  

    await page.waitForSelector('[data-testid="category_goods"]', { timeout: 25000 });
  
    const items = await page.$$('[data-testid="category_goods"] a');
    expect(items.length).toBeGreaterThan(0);
  }, 30000);

  test('Перехід на сторінку товару', async () => {
    await page.waitForSelector('rz-product-tile a.tile-image-host', { timeout: 20000 });
  
    const firstProduct = await page.$('rz-product-tile a.tile-image-host');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      firstProduct.click(),
    ]);
  
  
    const productTitle = await page.$eval('h1', el => el.textContent.trim());
    expect(productTitle.length).toBeGreaterThan(5);
  }, 30000);

  test('Додавання товару до кошика', async () => {
    await page.waitForSelector('button.buy-button', { timeout: 15000 });
    await page.click('button.buy-button');

  }, 20000);
});
