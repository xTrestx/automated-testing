import { Selector } from 'testcafe';

fixture `YouTube UI Tests`
    .page `https://www.youtube.com`;

test('Search input is visible and enabled', async t => {
    const searchInput = Selector('input').withAttribute('name', 'search_query');

    await t.expect(searchInput.exists).ok('Search input should exist');
    await t.expect(searchInput.visible).ok('Search input should be visible');
    await t.expect(searchInput.hasAttribute('disabled')).notOk('Search input should not be disabled');
});