angular
	.module('balconyShareApp', ['ngMaterial', 'home', 'event', 'dialog'])
	.config(function($mdThemingProvider, $mdIconProvider){
	
		$mdIconProvider.defaultIconSet("/avatars.svg", 128);
        $mdIconProvider.fontSet('fa', 'fontawesome');
			
		$mdThemingProvider.theme('default').primaryPalette('red');
	});