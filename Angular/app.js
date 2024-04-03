var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	$scope.myno1=100;
	$scope.myno2=10;

	$scope.res=parseInt($scope.myno1)+parseInt($scope.myno2);

	$scope.add=function(){
		 $scope.res=parseInt($scope.myno1)+parseInt($scope.myno2);
	}

})
