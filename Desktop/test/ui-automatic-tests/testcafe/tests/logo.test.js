import { Selector } from 'testcafe';

fixture `YouTube UI Tests`
    .page `https://www.youtube.com`;

test('YouTube logo is visible', async t => {
    const logo = Selector('a#logo');
    await t.expect(logo.exists).ok();
    await t.expect(logo.visible).ok();
});