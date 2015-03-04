var IndexPage = require('./IndexPage');

describe('credential submission', function () {

  var page = new IndexPage();

  beforeEach(function () {
    page.get();
  });

  describe('auth attempt', function () {
    it('log in when given the correct credentials', function () {
      page.fillEmail();
      page.fillPassword();
      page.submitBtn.click();

      expect(browser.getLocationAbsUrl()).toBe('/landing');
    });
  });
});
