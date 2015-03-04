var IndexPage = require('./IndexPage');

describe('credential submission', function () {

  var page = new IndexPage();

  beforeEach(function () {
    page.get();
  });

  describe('auth attempt', function () {
    it('logs in when given the correct credentials', function () {
      page.fillEmail();
      page.fillPassword();
      page.submitBtn.click();

      expect(browser.getLocationAbsUrl()).toBe('/landing');
    });
  });

  describe('bad auth attempt', function () {
    it('displays error when given incorrect credentials', function () {
      page.fillEmail();
      page.passwordInput.sendKeys('fizzbuzz');
      page.submitBtn.click();

      expect(page.errorContainer.isPresent()).toBe(true);
    });
  });
});
