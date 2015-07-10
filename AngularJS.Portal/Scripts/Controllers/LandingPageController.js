var LandingPageController = function ($scope, $http) {
    var allHeroes = [];
    
    var responsePromise = $http.get("/Scripts/dota.json");

    responsePromise.success(function (data, status, headers, config) {
        $scope.models = data;
    });
    responsePromise.error(function (data, status, headers, config) {
        console.log('$http get failed.');
    });

    $scope.isStr = function (model) {
        return model.info.type === 'Str';
    };
    $scope.isAgi = function (model) {
        return model.info.type === 'Agi';
    };
    $scope.isInt = function (model) {
        return model.info.type === 'Int';
    };
    
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', '$http'];