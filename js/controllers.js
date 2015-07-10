var timetrackerControllers = angular.module('timetrackerControllers', []);

timetrackerControllers.controller('TasklistCtrl', ['$scope', function($scope) {
	$scope.isStarted = false;
	$scope.tasks = [];
	$scope.task = {
		"title": "Working on timetracker app",
		"project": {
			"name": "PAP",
			"color": "purple"
		},
		"price": 5.21
	}

	$scope.start = function() {
		$scope.tasks.push($scope.task);
		$scope.task.started_at = new Date();
		$scope.isStarted = true;
	}

	$scope.stop = function() {
		$scope.isStarted = false;
		$scope.task.ended_at = new Date();
		$scope.task = {};
	}
}]);