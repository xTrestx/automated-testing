Feature('YouTube - Page Title');

Scenario('Перевірка правильного заголовку сторінки', ({ I }) => {
  I.amOnPage('/');
  I.seeInTitle('YouTube');
});