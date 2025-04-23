import * as util from './skrypnyk.js'

describe('Функція charAt', () => {
    test('повертає правильний символ за індексом', () => {
      expect(util.charAt('привіт', 1)).toBe('р');
    });
  
    test('повертає порожній рядок, якщо індекс виходить за межі', () => {
      expect(util.charAt('hi', 10)).toBe('');
    });
  
    test('повертає перший символ', () => {
      expect(util.charAt('abc', 0)).toBe('a');
    });
  
    test('працює з пробілами', () => {
      expect(util.charAt('а б', 1)).toBe(' ');
    });
  
    test('повертає останній символ', () => {
      expect(util.charAt('тест', 3)).toBe('т');
    });
  });
  
  describe('Функція charCodeAt', () => {
    test('повертає ASCII-код символу', () => {
      expect(util.charCodeAt('A', 0)).toBe(65);
    });
  
    test('повертає NaN, якщо індекс за межами рядка', () => {
      expect(util.charCodeAt('abc', 100)).toBeNaN();
    });
  
    test('повертає код для маленької літери', () => {
      expect(util.charCodeAt('z', 0)).toBe(122);
    });
  
    test('повертає код для пробілу', () => {
      expect(util.charCodeAt(' ', 0)).toBe(32);
    });
  
    test('повертає код для цифрового символу', () => {
      expect(util.charCodeAt('8', 0)).toBe(56);
    });
  });
  
  describe('Функція includes', () => {
    test('повертає true, якщо підрядок знайдено', () => {
      expect(util.includes('привіт світ', 'світ')).toBe(true);
    });
  
    test('повертає false, якщо підрядок не знайдено', () => {
      expect(util.includes('привіт', 'бувай')).toBe(false);
    });
  
    test('повертає true для порожнього рядка як пошукового', () => {
      expect(util.includes('hello', '')).toBe(true);
    });
  
    test('повертає false, якщо основний рядок порожній', () => {
      expect(util.includes('', 'а')).toBe(false);
    });
  
    test('розрізняє великі і малі літери', () => {
      expect(util.includes('Привіт', 'привіт')).toBe(false);
    });
  });