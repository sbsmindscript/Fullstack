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

        $scope.init=function(){
          $("#overlay").fadeIn(300);
          // get location by GET method/
          $http({
               method  : 'GET',
               url     :  SERVERURL+'view_location.php'
          
            })      
              .then(function (response) {
                console.log(response.data);
               $scope.locationData = response.data;
                
              })

              //closed location api/

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
                    },400);
              })
        
        
          $http({
               method  : 'GET',
               url     :  SERVERURL+'view_customers.php'
          
            })      
              .then(function (response) {
                console.log(response.data);
               $scope.customerData = response.data;
                
              })

        //init closed below         
        }

        
 
        // $scope.save_customers= function(){  
         
        //     $scope.memberinfo = JSON.stringify($scope.member);
       
        //           $("#overlay").fadeIn(300);
       
        //      $http({
        //             method  : 'POST',
        //               url   :  SERVERURL+'add_customer.php',
        //             data    :  $scope.member,          
        //             headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
        //            })      
        //              .then(function (response) {
        //                console.log(response.data);
        //                  if(response.data[0] == "Success"){
        //                   swal({
        //                      title: "Success.!",
        //                      icon: "success",
        //                      dangerMode: true,
        //                })
        //                    $scope.resetForm();
        //                    $scope.init();
       
        //                    setTimeout(function(){
        //                    $("#overlay").fadeOut(300);
        //                    // $window.location.reload();
        //                    },900);
       
        //                  }else{
        //                    alert("Error in adding");
        //                  }
        //              })
       
        //          }
       

        //upload image//

        $scope.uploadedFile = function(element) {
        $scope.currentFile = element.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
          $scope.image_source = event.target.result
          $scope.$apply(function($scope) {
            $scope.files = element.files;

            swal({
            title: "Image Uploaded.",
             icon: "success",
             dangerMode: false,
              })

          });
        }
      reader.readAsDataURL(element.files[0]);
      }

  $scope.files = [];
//


    $scope.resetForm=function(){
     $scope.member.cust_name="";
     $scope.member.location="";
     $scope.member.agent_email="";
     $scope.member.agent_id="";
     $scope.member.mob="";
     $scope.member.business_name="";
     $scope.member.business_proof="";
     $scope.member.image="";
  }

$scope.save_customers = function() {
  $scope.member.image = $scope.files[0];

   $("#overlay").fadeIn(300);

  $http({
        method  : 'POST',
        url     : SERVERURL+'save_customer_details.php',
        processData: false,
        transformRequest: function (data) {
            var formData = new FormData();
            formData.append("image", $scope.member.image); 
            formData.append("cust_name",$scope.member.cust_name);
            formData.append("location",$scope.member.location); 
            formData.append("agent_email", $scope.member.agent_email); 
            formData.append("agent_id",$scope.member.agent_id);
            formData.append("mob",$scope.member.mob);
            formData.append("business_name",$scope.member.business_name);  
            formData.append("business_proof",$scope.member.business_proof); 
          return formData;  
        },  
        data : $scope.member,
        headers: {
               'Content-Type': undefined
        }
       }).then(function (response) {
           console.log(response.data);
           if(response.data[0] == "Success"){
                swal({
                     text: "Details Saved..!",
                     icon: "success",
                 dangerMode: true,
                    })

                     $("#overlay").fadeOut(300);

                      $scope.resetForm();
                      $scope.init();
                      document.getElementById('photo').value="";
                      document.getElementById('imgs').style.display='none';

                  }
                  else{
                    swal({
                     text: "Capture Image Only",
                     icon: "warning",
                     dangerMode: true,
                    })
                    $("#overlay").fadeOut(300);
                  }
                 
             });
         }

});//close controller