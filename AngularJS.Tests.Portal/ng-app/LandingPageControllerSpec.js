/// <reference path="../../AngularJS.Portal/Scripts/angularjs/angular.js" />
/// <reference path="../../AngularJS.Portal/Scripts/angularjs/angular-mocks.js" />
/// <reference path="../../AngularJS.Portal/Scripts/Controllers/LandingPageController.js" />
/// <reference path="../../AngularJS.Portal/Scripts/AngularJSApp.js" />

describe('Controller: AngularJSApp', function () {
    beforeEach(module('AngularJSApp'));

    var LandingPageController, scope;
    beforeEach(inject(function ($controller) {
        scope = {};
        LandingPageController = $controller('LandingPageController', {
            $scope: scope
        });
    }));
    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });
});