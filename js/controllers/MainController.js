app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
	$scope.details = {};
	$scope.busses = new Set();
	$scope.send = function() {
	};

	$http.get("https://api.octranspo1.com/v1.2/Gtfs?appID=3a647e7d&apiKey=d51425ec5540622e71c764e84430f751&table=routes&format=json")
	.success(function(response){
		for (var bus in response.data.Gtfs) {
			$scope.busses.add(bus.route_short_name)
		}
		// console.log(response.found);
	});
}]);