angular.module('chosen').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl:'choose/views/index.client.view.html'
    });
}]);