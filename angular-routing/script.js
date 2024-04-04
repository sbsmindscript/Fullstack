var app=angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){

    $routeProvider
          .when("/",{
                templateUrl: "home.html"
          })
          .when("/contactus",{
                templateUrl: "contact.html",
                controller: "contactCtrl"
          })
          .when("/about",{
                templateUrl: "about.html",
                controller: "AboutCtrl"
          });

});


app.controller('myController',function($scope,$http,$window,$rootScope){

      $rootScope.message="View All Data.";  

  });


app.controller('contactCtrl',function($scope,$rootScope){

      $scope.a=10;
      $scope.b=10;

      $rootScope.sum= $scope.a+$scope.b; 

  });





 app.controller('AboutCtrl', function($scope,$http,$window,$location) {
     $scope.memberdata = JSON.stringify($scope.member);

      $scope.save=function(){

        $http({
                 method  : 'POST',
                  url    : 'addadmin.php',
                  data   :  $scope.member, 
                 headers : {'Content-Type': 'application/x-www-form-urlencoded'}          
               })
                 .then(function (response) {
                   console.log(response.data);
                    if(response.data[0] == "Success"){
                      $scope.member.names="";
                      $scope.member.pass="";
            
                     $scope.showMe();
                      }else{
                              alert("Error in adding");
                            }
                                
                             }) 

                        } 
                        

                        //view All By GET Method//

            $scope.showMe=function(){
                  
                  $http({
                    method  : 'GET',
                    url     : 'view_admin.php',
                     })      
                      .then(function (response) {
                        console.log(response.data);
                        $scope.catlist=response.data;
                        
                        })

                      }

                  

                             $scope.del_reviewer = function(id){
                              $scope.delete_id = id;
                              console.log($scope.delete_id);
                                
                            $http({
                                     method  : 'POST',
                                      url     : 'delete_subject.php',
                                      data    :  $.param({'id' : $scope.delete_id}),         
                                   headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
                                })     
                                    .then(function (response) {
                                      console.log(response.data);
                                      if(response.data[0] == "Success"){
                                          alert("Data Delete Successfully...");
                                          //$window.location.reload();
                                          $scope.showMe();
                                        }else{
                                          alert("Error");
                                        }
                                        })

                                     }

                                      $scope.toggleAll = function(){
                                      for (var i = 0; i < $scope.catlist.length; i++) {
                                          $scope.catlist[i].Selected = $scope.checkAll;

                                      }
                                  };

                                   $scope.toggleOne = function(){
                                    $scope.checkAll = true;
                                    for (var i = 0; i < $scope.catlist.length; i++) {
                                        if (!$scope.catlist[i].Selected) {
                                            $scope.checkAll = false;
                                            break;
                                        }
                                    };
                                };



                               $scope.deleteAll = function(){
                                checkedId = [];
                                for (var i = 0; i < $scope.catlist.length; i++) {
                                    if ($scope.catlist[i].Selected) {
                                        checkedId.push($scope.catlist[i].id);
                                    }
                                }
                                $http.post("delete.php",checkedId)
                                 .then(function (response) {
                                      console.log(response.data);
                                      if(response.data[0] == "Success"){
                                          alert("Data Delete Successfully...");
                                          $window.location.reload();
                                        }else{
                                          alert("Error");
                                        }
                                        })   
                                      }
           




                        //close controller below//
                        })

                           
                        
