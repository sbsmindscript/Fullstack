'use strict';

 var SERVERURL="http://localhost/bank_api/";

angular.module('myApp.agent', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/agent', {
    templateUrl: 'app/pages/agent/agent.html',
    controller: 'AgentCtrl'
  });
}])

.controller('AgentCtrl', function($scope, $http, $window) {
  
});