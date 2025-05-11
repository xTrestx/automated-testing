import { Selector } from 'testcafe';

fixture `Page Load Test`
    .page `https://www.youtube.com`;

test('Page has correct title', async t => {
    const title = await t.eval(() => document.title);
    await t.expect(title).eql('YouTube');
});