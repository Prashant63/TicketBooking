/*
* by PKatariya 05/07/16
* render nav bar on browser
*/

booking.directive('seatMap',function(){
	return {
		restrict: 'E',
		scope:{
			seatName: '=',
			seatsEachRow: '=',
			getTotalNumberSeats: '=',
			seatMapDisable: '=',
			confirmSeatSel: '=',
			currentSeatCount: '=',
			reservedSeats: '='
		},
		link: function(scope){
			scope.selectedSeats = [];

			scope.toggleSeatSelect = function(args, event){
				if(!isSeatSelected(args)){
					if(scope.currentSeatCount > scope.selectedSeats.length){
						scope.selectedSeats.push(args);
						event.currentTarget.style.backgroundColor = "#FF6D00";
					}
				}
				else{
					deleteSelectedSeat(args);
				}
				
			}

			var isSeatSelected = function(args){
				var selected = false;
				for(var i = 0; i < scope.selectedSeats.length; i++){
					var seat = scope.selectedSeats[i];
					if(args.seat == seat.seat && args.index == seat.index){
						selected = true;
					}
				}
				return selected;
			}

			var deleteSelectedSeat = function(args){
				var temp = [];
				for(var i = 0; i < scope.selectedSeats.length; i++){
					var seat = scope.selectedSeats[i];
					if(args.seat != seat.seat || args.index != seat.index){
						temp.push(seat);
					}
				}
				event.currentTarget.style.backgroundColor = "";
				scope.selectedSeats = temp;
			}

			scope.confirm = function(){
				// iterate on selected seats
				if(scope.currentSeatCount == scope.selectedSeats.length){
						var seats = [];
					for(var i = 0; i < scope.selectedSeats.length; i++){
						var seat = scope.selectedSeats[i];
						seats.push(seat.seat+seat.index);
					}
					scope.confirmSeatSel(seats)
				}
				
			}
		},
		templateUrl: 'controller/directive/seatmap/seatMapView.html'
	};
});