
describe('sign-in-form', function () {

  beforeEach(function () {
    browser.get('/');
  });

  describe('basics', function () {
    it('should display the correct page title', function () {
      expect(browser.getTitle()).toBe('Sign In');
    });

    it('should display the forgot your password link', function () {
      var forgotLink = element(by.linkText('Forgot your password?'));
      expect(forgotLink.isPresent()).toBe(true);
    });
  });
});
