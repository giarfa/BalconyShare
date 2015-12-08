angular
	.module('balconyShareApp', ['ngMaterial', 'home', 'profile'])
	.config(function($mdThemingProvider, $mdIconProvider){
	
		$mdIconProvider
			.defaultIconSet("./avatars.svg", 128);
			
		$mdThemingProvider.theme('default')
			.primaryPalette('red');
	});