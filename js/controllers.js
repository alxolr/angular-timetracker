var timetrackerControllers = angular.module('timetrackerControllers', []);

timetrackerControllers.controller('TasklistCtrl', ['$scope', function($scope) {
	$scope.tasks = [{
		"title": "Coding my timetracking application",
		"started_at": new Date(),
		"project": {
			"name": "Timetracker",
			"label": "success",
			"client": "Olaru Alexandru"
		}
	}]
}]);