/// <reference path="../../AngularJS.Portal/Scripts/angularjs/angular.js" />
/// <reference path="../../AngularJS.Portal/Scripts/angularjs/angular-mocks.js" />
/// <reference path="../../AngularJS.Portal/Scripts/Controllers/LandingPageController.js" />
/// <reference path="../../AngularJS.Portal/Scripts/AngularJSApp.js" />

describe('Ctrl: LandingPage', function () {
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


describe('Ctrl: HeroDetails', function () {
    beforeEach(module('AngularJSApp'));

    var HeroDetailsController, scope;
    beforeEach(inject(function ($controller) {
        scope = {};
        HeroDetailsController = $controller('HeroDetailsController', {
            $scope: scope
        });
    }));
    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });
    it('should have models defined', function () {
        expect(scope.models).toBeDefined();
    });
    it('should have models.tab default to 1', function () {
        expect(scope.models.tab).toBe(1);
    });
    it('selectTab should set tab to value', function () {
        HeroDetailsController.selectTab(1);
        expect(scope.models.tab).toBe(1);
    });
    it('isSelected should return if tab is selected', function () {
        scope.models.tab = 3;
        var isSelected = HeroDetailsController.isSelected(3);
        expect(isSelected).toEqual(true);
    });
});

