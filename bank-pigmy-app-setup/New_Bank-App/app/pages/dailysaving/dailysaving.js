'use strict';
 
 var SERVERURL="http://localhost/bank_api/";

angular.module('myApp.dailysaving', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/daily', {
    templateUrl: 'app/pages/dailysaving/dailysaving.html',
    controller: 'DailySavingCtrl'
  });
}])
 .controller('DailySavingCtrl', function($scope, $http, $window) {

 	$scope.member={};

    $scope.init = function() {

    $("#overlay").fadeIn(300);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.$evalAsync(function() {

                $scope.member.latitude = position.coords.latitude;
                console.log($scope.member.latitude);
                $scope.member.longitude = position.coords.longitude;
                console.log($scope.member.longitude);
        
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
           
                // swal({
                //       title: "Geo Location is Enabled.",
                //       icon: "success",
                //       dangerMode: false,
                //     })

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);
                
            })
            // 


            // View Collection data//

            $http({
              method  : 'POST',
              url     : SERVERURL+'get_collection_for_agent.php',
              data    :  $.param({ 'email' : $scope.users}),
              headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
                })
                 .then(function (response) {
                 console.log(response.data);

                   setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);

                   $scope.collectionData=response.data;
                
            })
            //

            })
        });
    }

}
 
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


 $scope.save_collection = function(){  
         
     $scope.memberinfo = JSON.stringify($scope.member);

           $("#overlay").fadeIn(300);

      $http({
             method  : 'POST',
               url   :  SERVERURL+'add_collection.php',
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


            $scope.request_change=function(saving_id){

                $("#overlay").fadeIn(300);

                     $scope.member={};

                      $scope.id = saving_id;

             $http({
                     method  : 'POST',
                     url     :  SERVERURL+'get_amount_by_id.php',
                     data    :  $.param({'id' : $scope.id}),         
                     headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
                  })     
                 .then(function (response) {
                  console.log(response.data);

                   $scope.member.id = response.data[0].saving_id;
                   $scope.member.cust_name = response.data[0].customer_full_name;
                   $scope.member.acc_no = response.data[0].cust_account_no;
                   $scope.member.amounts = response.data[0].amount;

                    setTimeout(function(){
                    $("#overlay").fadeOut(300);
                    },500);
                
                  })
            }


            $scope.update_amount = function(){
                    
                  $scope.memberinfo = JSON.stringify($scope.member);
                  $http({
                    method:'POST',
                    url:SERVERURL+'update_amount.php',
                    data:$scope.member,
                    headers:{'Content-Type':'application/x-www-form-urlencoded'}  
                  })
                    .then(function(response){
                      $scope.data=response.data;
                      console.log($scope.data);
                      //console.log(response.data[0]);
                      if(response.data[0]=='Success'){

                        swal({
                             title: "Updated Successful..!",
                             icon: "success",
                            dangerMode: true,
                             })

                          $('#exampleModal').modal('hide');
                          $scope.init();
                          $('#updateForm').find('input').val('');
                          $('#updateForm').find('select').val('');
                          
                          
                          }
                          
                      if(response.data[0]=='Sorry'){

                        swal({
                             title: "Error..!",
                             icon: "warning",
                            dangerMode: true,
                             })
                      
                      }
                    })

                 }

});//close controller