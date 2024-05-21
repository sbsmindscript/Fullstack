'use strict';

angular.module('myApp', [
  'ngRoute',  
  'myApp.dashboard',
  'myApp.agent',
  'myApp.customer'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  

  $routeProvider
  .when("/errorPage", {
        templateUrl : "app/404.html"
    })
  .otherwise({redirectTo: '/dashboard'});

}])

.controller('myCtrl', function($scope,$http,$window) { 


})