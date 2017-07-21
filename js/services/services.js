var app = angular.module('dadlibs');

app.factory('dadService', function(){

	var dad;

	return {
		dadStory: function(dadObj) {
			dad = dadObj;
			console.log(dad)
		},
		getStory: function(){
			return dad;
		}

	}


})