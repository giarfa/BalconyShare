(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('event', [])
	.controller('EventController', 
	function($mdDialog) {
		var vm = this;
	
		vm.balconies = db().balconies;
        
        vm.showPrice = function(price) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Info')
                    .textContent('A spot here will cost you ' + price + '€')
                    .ok('Got it!')
            );
        };
        
        vm.buyBalcony = function(balcony) {
            // Appending dialog to document.body to cover sidenav in docs app
            $mdDialog.show({
                controller: 'DialogController',
                templateUrl: '/dialog',
                parent: angular.element(document.body),
                clickOutsideToClose:true,
                fullscreen: true,
                resolve: {
                    balcony: function () {
                        return balcony;
                    }
                }
                })
                .then(function(spots) {
                    var msg = '';
                    if (spots === 1)
                        msg = 'The spot is reserved just for you!!!';
                    else
                        msg = 'All your spots are now booked!!!';
                        
                    $mdDialog.show(
                        $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Awesome')
                            .textContent(msg)
                            .ok('Got it!')
                    );
                }, function() { });
                
                
            // var confirm = $mdDialog.confirm()
            //     .title('Would you like to buy a spot here?')
            //     .textContent('Mustache esse vinyl, food truck celiac cold-pressed blue bottle minim non keytar austin nesciunt street art.')
            //     .ariaLabel('Lucky day')
            //     .ok('Yes do it!')
            //     .cancel('No thanks');
            // $mdDialog.show(confirm).then(function() {
            //     $mdDialog.show(
            //         $mdDialog.alert()
            //             .clickOutsideToClose(true)
            //             .title('Awesome')
            //             .textContent('The spot is reserved just for you!!!')
            //             .ariaLabel('Alert Dialog Demo')
            //             .ok('Got it!')
            //     );
            // }, function() {
            // });
    };
  
	});
	
	})();