'use strict';

describe('Directive: currentTimer', function () {

  // load the directive's module
  beforeEach(module('gl.geekymenu'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<current-timer></current-timer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the currentTimer directive');
  }));
});