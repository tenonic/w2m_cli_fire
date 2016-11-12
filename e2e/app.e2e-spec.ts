import { W2mPage } from './app.po';

describe('w2m App', function() {
  let page: W2mPage;

  beforeEach(() => {
    page = new W2mPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
