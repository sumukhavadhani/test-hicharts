import { TestHichartsPage } from './app.po';

describe('test-hicharts App', () => {
  let page: TestHichartsPage;

  beforeEach(() => {
    page = new TestHichartsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
