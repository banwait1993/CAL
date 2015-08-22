//JavaScript Document
//Adding angular module	
//Controller for the 1st exercise			
var myApp = angular.module('myApp',[]);



myApp.controller('MyController', function MyController($scope, $http){
	//instantiating the variables
   $scope.count = 0;	
   $scope.score = 0;
   $scope.Answer = function () {
		console.log('instance created');
		}
    //getting the data from json
	//using success/error callback style
	$http.get('questions.json').success(function(data){
		$scope.datalist = data;	
	}).error(function(err){
		throw err;
	});


});	   
	   
	   
