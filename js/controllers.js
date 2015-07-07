var timetrackerControllers = angular.module('timetrackerControllers', []);

timetrackerControllers.controller('TasklistCtrl', ['$scope', function($scope) {
	$scope.isStarted = false;
	$scope.tasks = [{
		"title": "I am working on my timetracking application, to see my results",
		"started_at": new Date(),
		"ended_at": new Date(),
		"price": 5.25,
		"project": {
			"name": "Alex's Timetracker",
			"color": "purple",
		},
		"tags": ["angularjs", "nodejs", "mongodb"]
	}];


	$scope.start = function() {
		if ($scope.task && $scope.task.project && $scope.task.price) {
			$scope.tasks.push($scope.task);
			$scope.isStarted = true;
		}
	}

	$scope.stop = function() {
		$scope.isStarted = false;
		$scope.task = {};
	}
}]);