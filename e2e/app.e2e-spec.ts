import { MoneyflowPage } from './app.po';

describe('moneyflow App', function() {
  let page: MoneyflowPage;

  beforeEach(() => {
    page = new MoneyflowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
