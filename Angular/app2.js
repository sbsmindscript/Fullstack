app.controller('myCtrls', function($scope,$rootScope) {

	$scope.my1=5;
	$scope.my2=3;

	$rootScope.msg="HI Balu";

	$scope.ress=parseInt($scope.my1)+parseInt($scope.my2);

	$scope.add=function(){
		 $scope.ress=parseInt($scope.my1)+parseInt($scope.my2);
	}

   

});