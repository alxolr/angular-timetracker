var timetrackerDirectives = angular.module('timetrackerDirectives', []);

timetrackerDirectives.directive('timer', ['$interval', function($interval) {

	function link(scope, element, attrs) {
		var timeoutId;

		function updateTimer() {
			var hours, minutes, seconds, milisecs, result, now;
			now = new Date();

			if (scope.task) {
				milisecs = 0;
				if (scope.task.ended_at !== undefined) {
					milisecs = scope.task.ended_at.getTime() - scope.task.started_at.getTime();
				} else {
					milisecs = now.getTime() - scope.task.started_at.getTime();
				}
			}

			milisecs = milisecs / 1000;

			hours = parseInt(milisecs / 3600) % 24;
			minutes = parseInt(milisecs / 60) % 60;
			seconds = parseInt(milisecs % 60);

			result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

			element.text(result);
		}


		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});

		timeoutId = $interval(function() {
			updateTimer();
		}, 1000);
	}

	return {
		link: link
	};
}]);


timetrackerDirectives.directive('cost', ['$interval', function($interval) {

	function link(scope, element, attrs) {
		var timeoutId;

		function updateCost() {
			var price = 0.00, secs = 0, pricePerSec = 0, result, now = new Date();

			if (scope.task) {
				pricePerSec = parseFloat(scope.task.price / 3600);

				if (scope.task.ended_at !== undefined ) {
					secs = parseFloat((scope.task.ended_at.getTime() - scope.task.started_at.getTime()) / 1000);
				} else {
					secs = parseFloat((now.getTime() - scope.task.started_at.getTime()) / 1000);
				}

			}

			result = pricePerSec * secs;
			element.html('<i class="fi fi-euro"></i> ' + result.toFixed(2));
		}

		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});

		timeoutId = $interval(function() {
			updateCost();
		}, 1000);
	}

	return {
		link: link
	};
}]);

timetrackerDirectives.directive('total', ['$interval', function($interval) {

	function link(scope, element, attrs) {
		var timeoutId;

		function updateTotal() {
			var total, pricePerSec, price = 0, now = new Date();

			for (var i = 0; i < scope.tasks.length; i++) {
				pricePerSec = parseFloat(scope.tasks[i].price / 3600);

				if (scope.tasks[i].ended_at !== undefined ) {
					secs = parseFloat((scope.tasks[i].ended_at.getTime() - scope.tasks[i].started_at.getTime()) / 1000);
				} else {
					secs = parseFloat((now.getTime() - scope.tasks[i].started_at.getTime()) / 1000);
				}

				price += secs * pricePerSec;
			}

			element.html('<i class="fi fi-euro"></i> ' + price.toFixed(2));
		}

		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});

		timeoutId = $interval(function() {
			updateTotal();
		}, 1000);
	}

	return {
		link: link
	};
}]);