var timetrackerFilters = angular.module('timetrackerFilters', []);

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