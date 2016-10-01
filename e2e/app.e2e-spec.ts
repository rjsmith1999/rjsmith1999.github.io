import { Rjsmith1999Page } from './app.po';

describe('rjsmith1999 App', function() {
  let page: Rjsmith1999Page;

  beforeEach(() => {
    page = new Rjsmith1999Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
