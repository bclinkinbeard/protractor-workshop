
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

    it('should have the expected submit button', function () {
      var submitBtn = element(by.buttonText('Sign in'));
      expect(submitBtn.isPresent()).toBe(true);
    });

    it('should go to /forgot when clicking the forgot your password link', function () {
      element(by.linkText('Forgot your password?')).click();
      expect(browser.getLocationAbsUrl()).toBe('/forgot');
    });
  });
});
