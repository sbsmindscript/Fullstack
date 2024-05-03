angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'app/pages/dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])
 .controller('DashboardCtrl', function($scope, $http, $window) {
  
  $http({
              method  : 'POST',
              url     : SERVERURL+'total_saving_under_agent.php',
              data    :  $.param({ 'email' : $scope.users}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);

                   $scope.SumData=response.data[0].total_saving;
                
            }) 


            $http({
              method  : 'POST',
              url     : SERVERURL+'total_transaction_by_agent.php',
              data    :  $.param({ 'email' : $scope.users}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);

                   $scope.TransactionCount=response.data.length;
                
            })


            $http({
              method  : 'POST',
              url     : SERVERURL+'today_total_saving_under_agent.php',
              data    :  $.param({ 'email' : $scope.users}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);

                   $scope.TodaySumData=response.data[0].today_total_saving;
                
            }) 


            $http({
              method  : 'POST',
              url     : SERVERURL+'Today_total_transaction_by_agent.php',
              data    :  $.param({ 'email' : $scope.users}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);

                   $scope.TodayTransactionCount=response.data.length;
                
            })
 

});//close controller