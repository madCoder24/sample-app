import { TypescriptLoggingSamplePage } from './app.po';

describe('typescript-logging-sample App', () => {
  let page: TypescriptLoggingSamplePage;

  beforeEach(() => {
    page = new TypescriptLoggingSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
