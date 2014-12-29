'use strict';

describe('Directive: tableKeyControll', function () {

  // load the directive's module
  beforeEach(module('gl.geekymenu'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<table-key-controll></table-key-controll>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tableKeyControll directive');
  }));
});