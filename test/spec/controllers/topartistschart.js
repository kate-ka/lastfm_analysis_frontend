'use strict';

describe('Controller: TopartistschartCtrl', function () {

  // load the controller's module
  beforeEach(module('lastfmAnalysisApp'));

  var TopartistschartCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TopartistschartCtrl = $controller('TopartistschartCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TopartistschartCtrl.awesomeThings.length).toBe(3);
  });
});
