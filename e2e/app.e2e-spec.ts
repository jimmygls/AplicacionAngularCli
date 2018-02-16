import { AppWebRegistroPage } from './app.po';

describe('app-web-registro App', function() {
  let page: AppWebRegistroPage;

  beforeEach(() => {
    page = new AppWebRegistroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
