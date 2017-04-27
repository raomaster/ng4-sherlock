import { Ng4SherlockPage } from './app.po';

describe('ng4-sherlock App', () => {
  let page: Ng4SherlockPage;

  beforeEach(() => {
    page = new Ng4SherlockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
