var timetrackerControllers = angular.module('timetrackerControllers', []);

timetrackerControllers.controller('TasklistCtrl', ['$scope', function($scope) {
	$scope.isStarted = false;
	$scope.tasks = [];

	$scope.start = function() {
		if ($scope.task && $scope.task.project && $scope.task.price) {
			$scope.tasks.push($scope.task);
			$scope.task.started_at = new Date();
			$scope.isStarted = true;
		}
	}

	$scope.stop = function() {
		$scope.isStarted = false;
		$scope.task.ended_at = new Date();
		$scope.task = {};
	}
}]);