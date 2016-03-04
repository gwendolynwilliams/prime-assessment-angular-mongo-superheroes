myApp.controller('ListHeroController', ['$scope', '$http', function($scope, $http) {

    function getHeroes() {
        console.log('getting heroes');
        $http.get('/getHeroes').then(function(response) {
            $scope.heroes = response.data;
        });
    }

    getHeroes();

    $scope.deleteHero = function(id) {
        $http.delete('/deleteHero/' + id).then(function (response) {
            $scope.deleted = 'Hero deleted';
        });
        getHeroes();
    };

}]);