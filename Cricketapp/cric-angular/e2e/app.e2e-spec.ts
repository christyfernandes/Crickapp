import { CricAppPage } from './app.po';

describe('cric-app App', () => {
  let page: CricAppPage;

  beforeEach(() => {
    page = new CricAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
