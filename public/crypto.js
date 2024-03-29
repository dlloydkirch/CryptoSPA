var app = angular.module('cryptocurrencies', ['ngRoute'])
app.controller('cryptocontroller', function($scope, $http) {
    $http.get('https://api.coinmarketcap.com/v1/ticker/?limit=10').
    then(function(response) {
        $scope.greeting = response.data;
    });
    $scope.message = "hello to cryptocontroller controller"
});
app.controller('homepage', function($scope){
    $scope.message = 'This is my home';
});
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : "/homepage.html",
            conroller : 'homepage'
        })
        .when('/first', {
            templateUrl : "/first.html",
            conroller : 'cryptocontroller'
        })
        .when('/third', {
            templateUrl : "/third.html",
            conroller : 'cryptocontroller'
        })
        .when('/second', {
            templateUrl : "/second.html",
            conroller : 'cryptocontroller'
        })
        .otherwise({redirectTo: '/'});
});