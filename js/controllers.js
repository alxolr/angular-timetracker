var timetrackerControllers = angular.module('timetrackerControllers', []);

timetrackerControllers.controller('TasklistCtrl', ['$scope', function($scope) {
	$scope.tasks = [{
		"title": "I am working on my timetracking application, to see my results",
		"started_at": new Date(),
		"ended_at": new Date(),
		"price": 5.25,
		"project": {
			"name": "Alex's Timetracker",
			"color": "purple",
			"client": "Olaru Alexandru"
		},
		"tags": ["angularjs", "nodejs", "mongodb"]
	}]
}]);