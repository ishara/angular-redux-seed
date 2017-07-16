import { AngularReduxSeedPage } from './app.po';

describe('angular-redux-seed App', () => {
  let page: AngularReduxSeedPage;

  beforeEach(() => {
    page = new AngularReduxSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
