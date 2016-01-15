(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('home', [])
	.controller('HomeController', 
	function() {
		var vm = this;
	
		vm.events = db().events;
	});
	
	})();