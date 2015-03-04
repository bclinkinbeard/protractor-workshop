var IndexPage = require('./IndexPage');

describe('credential submission', function () {

  var page = new IndexPage();

  beforeEach(function () {
    page.get();
  });

  describe('auth attempt', function () {
    it('logs in when given the correct credentials', function () {
      
    });
  });

  describe('bad auth attempt', function () {
    it('displays error when given incorrect credentials', function () {

    });
  });
});
