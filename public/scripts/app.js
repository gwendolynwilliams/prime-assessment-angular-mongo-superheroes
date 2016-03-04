var myApp = angular.module("myApp", ['ngRoute']);
console.log('are we in app.js?');

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
     .when('/enterHero', {
        templateUrl: '/views/templates/enterHero.html',
        controller: 'EnterHeroController'
    })
    .when('/listHero', {
        templateUrl: '/views/templates/listHero.html',
        controller: 'ListHeroController'
    })
    .otherwise({
        redirectTo: '/enterHero'
    });

}]);