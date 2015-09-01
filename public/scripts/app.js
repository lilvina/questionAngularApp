var app = angular.module('questionApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'views/templates/home.html',
			controller: 'HomeCtrl'
		})
		.when('/:id', {
			templateUrl: 'views/templates/answers.html',
			controller: 'AnswersCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);

app.service('Question', ['$resource', function ($resource){
	return $resource('/api/questions/:id', {id: '@_id'}, {
		update: {
			method: 'PUT'
		}
	});
}])

app.controller('HomeCtrl', ['$scope', 'Question', function ($scope, Question){
	$scope.test = "Hello world!";
	$scope.allQuestions = Question.query();
}])