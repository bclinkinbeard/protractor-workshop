var IndexPage = require('./IndexPage');
var capture = require('../capture');

describe('sign-in-form', function () {

  var page = new IndexPage();

  beforeEach(function () {
    page.get();
  });

  afterEach(function () {
    capture.takeScreenshot(jasmine.getEnv().currentSpec);
  });

  describe('basics', function () {
    it('should display the correct page title', function () {
      expect(browser.getTitle()).toBe('Sign In');
    });

    it('should display the forgot your password link', function () {
      expect(page.forgotLink.isPresent()).toBe(true);
    });

    it('should have the expected submit button', function () {
      expect(page.submitBtn.isPresent()).toBe(true);
    });

    it('should go to /forgot when clicking the forgot your password link', function () {
      page.forgotLink.click();
      expect(browser.getLocationAbsUrl()).toBe('/forgot');
    });
  });
});
