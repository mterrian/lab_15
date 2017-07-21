var app = angular.module('dadlibs', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/input',{
			controller: 'inputController',
			templateUrl: 'partials/input.html',
			css: 'css/style.css'
		})
		.when('/output',{
			controller: 'outputController',
			templateUrl: 'partials/output.html',
			css: 'css/style.css'
		})
		.otherwise({
			redirectTo: '/input'
			
		});
});