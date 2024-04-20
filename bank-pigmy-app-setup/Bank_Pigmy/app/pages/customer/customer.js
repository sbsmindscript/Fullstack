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
 
 $scope.save_customers= function(){  
         
            $scope.memberinfo = JSON.stringify($scope.member);
       
                  $("#overlay").fadeIn(300);
       
             $http({
                    method  : 'POST',
                      url   :  SERVERURL+'add_customer.php',
                    data    :  $scope.member,          
                    headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
                   })      
                     .then(function (response) {
                       console.log(response.data);
                         if(response.data[0] == "Success"){
                          swal({
                             title: "Success.!",
                             icon: "success",
                             dangerMode: true,
                       })
                           $scope.resetForm();
                           $scope.init();
                         document.getElementById('acc').style.border="";
                         document.getElementById('msg').innerHTML="";
                         document.getElementById('msg').style.color="";
       
                           setTimeout(function(){
                           $("#overlay").fadeOut(300);
                           // $window.location.reload();
                           },900);
       
                         }else{
                           alert("Error in adding");
                         }
                     })
       
                 }
       
                 $scope.resetForm=function(){
                   $scope.member.cust_accno="";
                   $scope.member.latitude="";
                   $scope.member.longitude="";
                   $scope.member.customer_name="";
                   $scope.member.amount="";
       
                 }

});//close controller