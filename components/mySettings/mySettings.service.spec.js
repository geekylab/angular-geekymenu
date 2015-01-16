'use strict';

describe('Service: mySettings', function () {

  // load the service's module
  beforeEach(module('cloud2App'));

  // instantiate service
  var mySettings;
  beforeEach(inject(function (_mySettings_) {
    mySettings = _mySettings_;
  }));

  it('should do something', function () {
    expect(!!mySettings).toBe(true);
  });

});
