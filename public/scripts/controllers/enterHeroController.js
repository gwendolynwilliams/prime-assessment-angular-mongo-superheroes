myApp.controller('EnterHeroController', ['$scope', '$http', function($scope, $http) {
    console.log('Hero Controller');

    $scope.alias = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.city = '';
    $scope.primary_power = '';
    $scope.powers = ''; //for dropdown

    //function getPowerDropdown() {
    //    $http.get('/getPowers').then(function(response) {
    //        $scope.powers = response.data;
    //    });
    //}
    //
    //getPowerDropdown();

    $scope.addHero = function() {
        var hero = {
            alias: $scope.alias,
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            city: $scope.city,
            primary_power: $scope.primary_power
        };

        $http.post('/addHero', hero).then(function(response) {
            console.log(response.data);
            $scope.alias = '';
            $scope.first_name = '';
            $scope.last_name = '';
            $scope.city = '';
            $scope.primary_power = '';
        });
        $scope.added = true;
    };



}]);