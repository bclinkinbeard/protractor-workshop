
var fs = require('fs');

function capture (spec) {
  var name = spec.description.split(' ').join('_');
  name = name.split('/').join('');

  browser.takeScreenshot().then(function (png) {
    var stream = fs.createWriteStream('screenshots/' + name + '.png');
    stream.write(new Buffer(png, 'base64'));
    stream.end();
  });
}

exports.takeScreenshot = function (spec) {
  capture(spec);
};

exports.takeScreenshotOnFailure = function (spec) {
  if (spec.results().passed()) return;

  capture(spec);
};
