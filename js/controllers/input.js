var app = angular.module('dadlibs');

app.controller('inputController', function($scope, $location, dadService){

	$scope.getWords = function(dad) {
		var dadObj = dad

	dadService.dadStory(dadObj)
	$location.path('/output');
	}

	});