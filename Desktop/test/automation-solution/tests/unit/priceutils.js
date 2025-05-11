// Функція для розрахунку ціни зі знижкою
function calculateDiscountPrice(originalPrice, discount) {
    return originalPrice - (originalPrice * discount);
  }
  
  // Функція для форматування ціни
  function formatPrice(price) {
    return price.toLocaleString() + ' uah'; // Форматуємо як гривні
  }
  
  module.exports = { calculateDiscountPrice, formatPrice };