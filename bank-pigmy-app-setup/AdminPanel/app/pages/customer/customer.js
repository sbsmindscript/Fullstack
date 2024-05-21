'use strict';

 var SERVERURL="http://localhost/bank_api/";

angular.module('myApp.customer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customer', {
    templateUrl: 'app/pages/customer/customer.html',
    controller: 'CustomerCtrl'
  });
}])

.controller('CustomerCtrl', function($scope, $http, $window) {

});