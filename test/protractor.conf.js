
var browsers = require('./browsers');

var config = {
  specs: [
    './e2e/**/*.spec.js'
  ],

  baseUrl: 'http://localhost:3000',

  multiCapabilities: [
    browsers.chrome,
    browsers.firefox
  ],
  directConnect: true
};

exports.config = config;


