var mainAppName = 'choose';
var angularModule = angular.module(mainAppName, ['ngRoute', 'chosen']);

angularModule.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document, [mainAppName]);
});