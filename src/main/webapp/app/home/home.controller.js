angular.module('app.home').controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['$scope', '$http'];

function HomeCtrl($scope, $http) {

    $http({method: 'GET', url: 'exemplo'}).then(function (response) {
        $scope.helloWorld = response.data.helloWorld;
    });
}