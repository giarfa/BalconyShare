(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('dialog', [])
	.controller('DialogController', 
	function($scope, $mdDialog, balcony) {
        
        $scope.balcony = balcony;
        
        $scope.bookedSpots = 1;
        
        $scope.ok = function() {
            $mdDialog.hide($scope.bookedSpots);
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
	});
	
	})();