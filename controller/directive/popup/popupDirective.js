/*
* by PKatariya 05/07/16
* render nav bar on browser
*/

booking.directive('popup',function(){
	return {
		restrict: 'E',
		scope:{
			getUserInfo: '=',
			availSeats: '='
		},
		link: function(scope){
			var init = function(){
				scope.userName = "";
				scope.seatsNumber = "";
			}

			init();

			scope.sendUserData = function(){
				scope.getUserInfo(scope.userName, scope.seatsNumber);
				init();
			}
		},
		templateUrl: 'controller/directive/popup/popupView.html'
	};
});