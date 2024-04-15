angular.module('myApp.dailysaving', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/daily', {
    templateUrl: 'app/pages/dailysaving/dailysaving.html',
    controller: 'DailySavingCtrl'
  });
}])
 .controller('DailySavingCtrl', function($scope, $http, $window) {
 

});//close controller