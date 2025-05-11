Feature('YouTube - Logo Visibility');

Scenario('Перевірка видимості логотипу YouTube', ({ I }) => {
  I.amOnPage('https://www.youtube.com');
  I.seeElement('yt-img-shadow img');
});