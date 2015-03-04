
var browsers = require('./browsers');

var config = {
  suites: {
    basics: './e2e/index.spec.js',
    signin: './e2e/signin.spec.js'
  },

  baseUrl: 'http://localhost:3000',

  multiCapabilities: [
    browsers.chrome,
    browsers.firefox
  ],
  directConnect: true
};

exports.config = config;


