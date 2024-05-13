'use strict';
 
 var SERVERURL="http://localhost/bank_api/";

angular.module('myApp.reports', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reports', {
    templateUrl: 'app/pages/reports/reports.html',
    controller: 'ReportCtrl'
  });
}])
 .controller('ReportCtrl', function($scope, $http, $window) {

 	$scope.member={};

    $scope.init = function() {

    $("#overlay").fadeIn(300);
        
        $http({
              method  : 'POST',
              url     : SERVERURL+'get_agent_data.php',
              data    :  $.param({ 'email' : $scope.users}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);
                $scope.member.agent_email=response.data[0].email_id;
                $scope.member.agent_id=response.data[0].agent_id;
          

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);
                
            })
            // 
    }


    // View Collection data//

    $scope.get_collection=function(){

            $http({
              method  : 'POST',
              url     : SERVERURL+'customer_reports_by_agent.php',
              data    :  $.param({'email' : $scope.member.agent_email, 'agent_id': $scope.member.agent_id, 'account_no': $scope.member.cust_accno }),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);

                   $scope.collectionData=response.data;
                
            })
          }
            //
 
$scope.search_acc_no=function(){
	
	if($scope.member.cust_accno==null){
		document.getElementById('acc').style.border="2px solid red";
		document.getElementById('msg').innerHTML="Enter Acc.No";
		document.getElementById('msg').style.color="red";
		return false;
	}

	       $http({
              method  : 'POST',
              url     : SERVERURL+'get_agent_of_customer_data.php',
              data    :  $.param({ 'email' : $scope.users, 'account_no': $scope.member.cust_accno}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);
                $scope.member.customer_name=response.data[0].cust_name;
                   
                 if($scope.member.customer_name==null){
                 	document.getElementById('acc').style.border="2px solid yellow";
                 	document.getElementById('msg').innerHTML="Not Found";
                 }
                 else{
                 	document.getElementById('acc').style.border="2px solid green";
                 	document.getElementById('msg').innerHTML="Found";
                 	document.getElementById('msg').style.color="green";
                 }  

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);
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