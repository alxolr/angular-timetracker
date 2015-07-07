var timetrackerFilters = angular.module('timetrackerFilters', []);

timetrackerFilters.filter('cost', function () {

	return function(task) {

		var price = 0.00;
		var secs = 0;
		var pricePerSec = 0;

		if (task) {
			pricePerSec = parseFloat(task.price / 3600);
			console.log(pricePerSec);
			if (task.ended_at !== undefined ) {
				secs = parseFloat((task.ended_at.getTime() - task.started_at.getTime()) / 1000);
			} else {
				secs = 0;
			}

			console.log(secs);
		}

		return pricePerSec * secs;
	}	
});

timetrackerFilters.filter('total', function () {
	return function(tasks) {
		
		var price = 0.00;
		for (var i = 0; i < tasks.length; i++) {
			price += parseFloat(tasks[i].price);
		}

		return price;
	}	
});

timetrackerFilters.filter('hours', function () {
	return function(task) {

		return "00:12:25";
	}	
});