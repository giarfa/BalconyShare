(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('profile', [])
	.controller('ProfileController', 
	function() {
		var vm = this;
	
		vm.events = [];
		
		vm.events.push(
		{
			name: 'In-card mixed actions',
			description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
			date: '7 dec.',
			image: 'https://unsplash.it/400/300?image=836',
			isFavorite: true,
			publisher: {
			name: 'User',
			image: 'svg-2'
			},
			comments: [
			{
				user: {
				name: 'User',
				image: 'svg-2'
				},
				comment: 'Comment'
			}
			]
		}
		);
		vm.events.push(
		{
			name: 'In-card mixed actions',
			description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
			date: '7 dec.',
			image: 'https://unsplash.it/400/300?image=836',
			isFavorite: true,
			publisher: {
			name: 'User',
			image: 'svg-2'
			},
			comments: [
			{
				user: {
				name: 'User',
				image: 'svg-2'
				},
				comment: 'Comment'
			},
			{
				user: {
				name: 'User',
				image: 'svg-2'
				},
				comment: 'Comment'
			}
			]
		}
		);
		vm.events.push(
		{
			name: 'In-card mixed actions',
			description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
			date: '7 dec.',
			image: 'https://unsplash.it/400/300?image=836',
			isFavorite: true,
			publisher: {
			name: 'User',
			image: 'svg-2'
			},
			comments: [
			{
				user: {
				name: 'User',
				image: 'svg-2'
				},
				comment: 'Comment'
			},
			{
				user: {
				name: 'User',
				image: 'svg-2'
				},
				comment: 'Comment'
			}
			]
		}
		);
		vm.events.push(
		{
			name: 'In-card mixed actions',
			description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
			date: '7 dec.',
			image: 'https://unsplash.it/400/300?image=836',
			isFavorite: true,
			publisher: {
			name: 'User',
			image: 'svg-2'
			},
			comments: [
			{
				user: {
				name: 'User',
				image: 'svg-2'
				},
				comment: 'Comment'
			}
			]
		}
		);
	});
	
	})();