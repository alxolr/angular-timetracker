var timetrackerFilters = angular.module('timetrackerFilters', []);

timetrackerFilters.filter('cost', function () {
	return function(task) {
		var price = 15.32;
		return price;
	}	
});

timetrackerFilters.filter('total', function () {
	return function(tasks) {
		var price = 135.35;
		return price;
	}	
});

timetrackerFilters.filter('hours', function () {
	return function(task) {
		var time = "00:32:37";
		return time;
	}	
});