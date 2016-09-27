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

coffeeApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
});

coffeeApp.controller('logController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
});

coffeeApp.controller('searchController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
});
