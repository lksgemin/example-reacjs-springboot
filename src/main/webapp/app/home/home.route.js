angular.module('app.home').config(HomeRoute);

HomeRoute.$inject = ['$routeProvider'];

function HomeRoute($routeProvider) {

    $routeProvider.when('/', {controller: 'HomeCtrl', templateUrl: 'app/home/home.html'});
}