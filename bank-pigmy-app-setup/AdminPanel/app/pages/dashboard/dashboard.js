'use strict';

var SERVERURL="http://localhost/bank_api/";

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'app/pages/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', function($scope, $http, $window) {

});