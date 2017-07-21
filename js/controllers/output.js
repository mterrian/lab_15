var app = angular.module('dadlibs');

app.controller('outputController', function($scope, $location, dadService){

	$scope.dad = dadService.getStory();
	

	});