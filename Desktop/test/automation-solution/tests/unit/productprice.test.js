const { calculateDiscountPrice, formatPrice } = require('./priceutils'); // Шлях до вашого файлу

describe('Product Price Calculation', () => {
  test('should calculate correct price after discount', () => {
    const originalPrice = 1000;
    const discount = 0.1; // 10% знижка
    const finalPrice = calculateDiscountPrice(originalPrice, discount);

    expect(finalPrice).toBe(900);
  });

  test('should format price correctly', () => {
    const price = 1000;
    const formattedPrice = formatPrice(price);

    expect(formattedPrice).toBe('1,000 uah');
  });
});