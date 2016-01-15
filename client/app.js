angular
	.module('balconyShareApp', ['ngMaterial', 'home', 'event'])
	.config(function($mdThemingProvider, $mdIconProvider){
	
		$mdIconProvider
			.defaultIconSet("/avatars.svg", 128);
			
		$mdThemingProvider.theme('default')
			.primaryPalette('red');
	});