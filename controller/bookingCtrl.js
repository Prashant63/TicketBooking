booking.controller('bookingCtrl',["$scope", "bookingStorageService", function($scope, bookingStorageService){
	
	$scope.getTotalNumberSeats = function(number){
		return new Array(number);
	};

	$scope.confirmSeatSel = function(seats){
		$scope.users[$scope.currentUserIndex].seats=seats
		$scope.reservedSeats = $scope.reservedSeats.concat(seats);
		$scope.currentSeats = [];
		$scope.currentUserIndex = -1;
		$scope.seatMapDisable = true;
		bookingStorageService.set({
			key: "reservedSeats",
			data : $scope.reservedSeats
		});
		bookingStorageService.set({
			key: "storedUserDetails",
			data : $scope.users
		});
	}

	$scope.getUserInfo = function(userName, seatsNumber){
		$scope.users.push({name : userName, seat : seatsNumber, seats: []});
		$scope.currentUserIndex = $scope.users.length-1;
		bookingStorageService.set({
			key: "storedUserDetails",
			data : $scope.users
		});
		$scope.seatMapDisable = false;
		$scope.currentSeatCount = seatsNumber;

	};

	var init = function(){
		$scope.reservedSeats = [];
		$scope.seatMapDisable = true;
		$scope.currentSeatCount = 0;
		$scope.currentUserIndex = -1;
		$scope.usersDetails = [];		
		$scope.seatName = ['A','B','C','D','E','F','G','H','I','J'];
		$scope.seatsEachRow = 12;
		$scope.availSeats = $scope.seatName.length * 12;
		$scope.users = bookingStorageService.get({
								key: "storedUserDetails",
								type: "json"
							 });
		$scope.reservedSeats = bookingStorageService.get({
								key: "reservedSeats",
								type: "json"
							 });
		if($scope.reservedSeats == null){
			$scope.reservedSeats = [];
		}
		if($scope.users == null){
			$scope.users = [];
		}
		$scope.availSeats -= $scope.reservedSeats.length;
	}
	init();
}]);