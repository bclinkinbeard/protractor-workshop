
function IndexPage () {
  this.emailInput = element(by.model('user.email'));
  this.passwordInput = element(by.model('user.password'));
  this.submitBtn = element(by.buttonText('Sign in'));
  this.forgotLink = element(by.linkText('Forgot your password?'));

  this.get = function () {
    browser.get('/');
  };

  this.fillEmail = function () {
    this.emailInput.sendKeys('foo@bar.com');
  };

  this.getFilledEmail = function () {
    return this.emailInput.getAttribute('value');
  };

  this.fillPassword = function () {
    this.passwordInput.sendKeys('baz');
  };
}

module.exports = IndexPage;


