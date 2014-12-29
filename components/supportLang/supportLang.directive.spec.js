'use strict';

describe('Directive: supportLang', function () {

  // load the directive's module and view
  beforeEach(module('gl.geekymenu'));
  beforeEach(module('components/supportLang/supportLang.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<support-lang></support-lang>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the supportLang directive');
  }));
});