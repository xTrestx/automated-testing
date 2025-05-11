Feature('YouTube - Navigation Bar');

Scenario('Перевірка видимості навігаційної панелі YouTube', ({ I }) => {
  I.amOnPage('https://www.youtube.com');
  I.seeElement('ytd-masthead');
});