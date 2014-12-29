'use strict';

describe('Filter: currentLang', function () {

  // load the filter's module
  beforeEach(module('cloud2App'));

  // initialize a new instance of the filter before each test
  var currentLang;
  beforeEach(inject(function ($filter) {
    currentLang = $filter('currentLang');
  }));

  it('should return the input prefixed with "currentLang filter:"', function () {
    var text = 'angularjs';
    expect(currentLang(text)).toBe('currentLang filter: ' + text);
  });

});
