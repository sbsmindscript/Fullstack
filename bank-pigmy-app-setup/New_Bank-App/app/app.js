'use strict';

angular.module('myApp', [
  'ngRoute',  
  'myApp.dashboard',
  'myApp.customer',
  'myApp.dailysaving'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  

  $routeProvider
  .when("/errorPage", {
        templateUrl : "app/404.html"
    })
  .otherwise({redirectTo: '/dashboard'});

}])

.controller('myCtrl', function($scope,$http,$window) { 

 $scope.member={};

$scope.users= localStorage.getItem('username');


   if($scope.users == null)
    {
      
      $window.location.href='/';
    }

    else{

     
    }


//logout code //

$scope.logout=function(){

localStorage.removeItem("username");

$window.location.href='/';

}

})


