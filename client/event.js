(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('event', [])
	.controller('EventController', 
	function($mdDialog) {
		var vm = this;
	
		vm.balconies = db().balconies;
        
        vm.buyBalcony = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Would you like to buy this balcony?')
                .textContent('Mustache esse vinyl, food truck celiac cold-pressed blue bottle minim non keytar austin nesciunt street art.')
                .ariaLabel('Lucky day')
                .ok('Please do it!')
                .cancel('No, thanks');
            $mdDialog.show(confirm).then(function() {
                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('This is an alert title')
                        .textContent('You can specify some description text in here.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                );
            }, function() {
            });
};
  
	});
	
	})();