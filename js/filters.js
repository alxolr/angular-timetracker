var timetrackerFilters = angular.module('timetrackerFilters', []);

timetrackerFilters.filter('cost', function () {

	return function(task) {

		var price = 0.00;
		var secs = 0;
		var pricePerSec = 0;

		if (task) {
			pricePerSec = parseFloat(task.price / 3600);

			if (task.ended_at !== undefined ) {
				secs = parseFloat((task.ended_at.getTime() - task.started_at.getTime()) / 1000);
			} else {
				secs = 0;
			}

		}

		return pricePerSec * secs;
	}	
});

timetrackerFilters.filter('total', function () {
	return function(tasks) {
		var total, pricePerSec;
		var price = 0.00;

		for (var i = 0; i < tasks.length; i++) {
			pricePerSec = parseFloat(tasks[i].price / 3600);

			if (tasks[i].ended_at !== undefined ) {
				secs = parseFloat((tasks[i].ended_at.getTime() - tasks[i].started_at.getTime()) / 1000);
			} else {
				secs = 0;
			}

			price += secs * pricePerSec;
		}

		return price;
	}	
});

timetrackerFilters.filter('hours', function () {
	return function(task) {

		var now = new Date(), seconds, hours, minutes;
		
		if (task) {
			var milisecs = 0;
			if (task.ended_at !== undefined) {
				milisecs = task.ended_at.getTime() - task.started_at.getTime();
			} else {
				milisecs = now.getTime() - task.started_at.getTime();
			}
		}

		milisecs = milisecs / 1000; 

		var hours = parseInt( milisecs / 3600 ) % 24;
		var minutes = parseInt( milisecs / 60 ) % 60;
		var seconds = parseInt(milisecs % 60);

		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);

		return result;
	}	
});