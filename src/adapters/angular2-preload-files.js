/**
 * Files will be loaded by SystemJS in order.
 * @type {string[]}
 */
module.exports = [
  'es6-shim',
  'zone.js/dist/zone.js',
  '@angular/core/testing/index.js',
  '@angular/platform-browser-dynamic/testing/index.js',
  'zone.js/dist/jasmine-patch.js',
  'zone.js/dist/async-test.js',
  'zone.js/dist/fake-async-test.js'
];
