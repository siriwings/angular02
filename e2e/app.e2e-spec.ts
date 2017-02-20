import { Angular02Page } from './app.po';

describe('angular02 App', function() {
  let page: Angular02Page;

  beforeEach(() => {
    page = new Angular02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
