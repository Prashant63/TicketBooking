/*
* by PKatariya 05/07/16
* render nav bar on browser
*/

booking.directive('selectInfo',function(){
	return {
		restrict: 'E',
		scope:{
			users: '=',
			modifySeat: '='
		},
		link: function(scope){
			scope.modify = function(user){
				scope.modifySeat(user);
			}
		},
		templateUrl: 'controller/directive/selection/selectionInfoView.html'
	};
});