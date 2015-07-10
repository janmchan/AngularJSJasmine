/// <reference path="../../AngularJS.Portal/Scripts/angularjs/angular.js" />
/// <reference path="../../AngularJS.Portal/Scripts/angularjs/angular-mocks.js" />
/// <reference path="../../AngularJS.Portal/Scripts/Controllers/LandingPageController.js" />
/// <reference path="../../AngularJS.Portal/Scripts/Controllers/HeroDetailsController.js" />
/// <reference path="../../AngularJS.Portal/Scripts/AngularJSApp.js" />

describe('Ctrl: LandingPage', function () {

    beforeEach(module('AngularJSApp'));

    var LandingPageController, scope, $httpBackEnd;
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        LandingPageController = $controller('LandingPageController', {
            $scope: scope
        });
    }));
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackEnd = _$httpBackend_;
        $httpBackEnd.expectGET('/Scripts/dota.json').respond(
         [{
             "info": {
                 "div": "Dire",
                 "type": "Str",
                 "name": "Abaddon"
             },

             "avatar": {
                 "lg": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Large/_Class_Str/Abaddon.png",
                 "ico": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_MiniHeroes/abaddon.png",
                 "md": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Medium/_Class_Str/Abaddon.png",
                 "ssm": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_SSmall/_Class_Str/Abaddon.png",
                 "sm": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Small/_Class_Str/Abaddon.png",
                 "xs": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_XSmall/_Class_Str/Abaddon.png"
             }
         },
             {
                 "info": {
                     "div": "Dire",
                     "type": "Int",
                     "name": "Ancient_Apparition"
                 },
                 "avatar": {
                     "lg": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Large/_Class_Int/Ancient_Apparition.png",
                     "ico": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_MiniHeroes/ancient_apparition.png",
                     "md": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Medium/_Class_Int/Ancient_Apparition.png",
                     "ssm": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_SSmall/_Class_Int/Ancient_Apparition.png",
                     "sm": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Small/_Class_Int/Ancient_Apparition.png",
                     "xs": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_XSmall/_Class_Int/Ancient_Apparition.png"
                 }
             },
             {
                 "info": {
                     "div": "Radiant",
                     "type": "Agi",
                     "name": "Anti_Mage"
                 },
                 "avatar": {
                     "lg": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Large/_Class_Agi/Anti_Mage.png",
                     "ico": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_MiniHeroes/anti_mage.png",
                     "md": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Medium/_Class_Agi/Anti_Mage.png",
                     "ssm": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_SSmall/_Class_Agi/Anti_Mage.png",
                     "sm": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_Small/_Class_Agi/Anti_Mage.png",
                     "xs": "http://apiservice.pythonanywhere.com/static/service/media/_src/_d2/_Heroes/_XSmall/_Class_Agi/Anti_Mage.png"
                 }
             }
         ]
        );

        $httpBackEnd.flush();
    }));
    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });
    it('should have models defined', function () {
        expect(scope.models).toBeDefined();
    });
    it('should determine Str heroes', function () {
        expect(scope.isStr(scope.models[0])).toBeTruthy();
    });
    it('should determine Int heroes', function () {
        expect(scope.isInt(scope.models[1])).toBeTruthy();
    });
    it('should determine Agi heroes', function () {
        expect(scope.isAgi(scope.models[2])).toBeTruthy();
    });
    
});


