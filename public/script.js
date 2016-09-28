var coffeeApp = angular.module('coffeeApp', ['ngRoute']);

coffeeApp.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: 'homepage.html',
    controller: 'mainController'
  })

  .when('/login-register',{
    templateUrl: 'login-register.html',
    controller: 'logController'
  })

  .when('/search',{
    templateUrl: 'search.html',
    controller: 'searchController'
  });

});

coffeeApp.controller('mainController', function($scope) {});

coffeeApp.controller('logController', function($scope) {});

coffeeApp.controller('searchController', function($scope) {});
