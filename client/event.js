(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('event', [])
	.controller('EventController', 
	function() {
		var vm = this;
	
		vm.events = [];
		
		vm.events.push(
		{
			name: 'In-card mixed actions',
			description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
			date: '24 jul.',
			image: 'http://www.rockshock.it/wp-content/uploads/2013/12/Lucca-Summer-Festival.jpg',
			isFavorite: true,
			publisher: {
			name: 'Lia',
			image: 'svg-1'
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
			name: 'Last Year view of my balcony',
			description: '',
			date: '12 jul.',
			image: 'http://s1.stliq.com/c/m/a/aa/22559852_lucca-summer-festival-2013-16-edizione-1.jpg',
			isFavorite: true,
			publisher: {
			name: 'Gener',
			image: 'svg-3'
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
		// vm.events.push(
		// {
		// 	name: 'In-card mixed actions',
		// 	description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
		// 	date: '7 dec.',
		// 	image: 'https://unsplash.it/400/300?image=836',
		// 	isFavorite: true,
		// 	publisher: {
		// 	name: 'User',
		// 	image: 'svg-2'
		// 	},
		// 	comments: [
		// 	{
		// 		user: {
		// 		name: 'User',
		// 		image: 'svg-2'
		// 		},
		// 		comment: 'Comment'
		// 	},
		// 	{
		// 		user: {
		// 		name: 'User',
		// 		image: 'svg-2'
		// 		},
		// 		comment: 'Comment'
		// 	}
		// 	]
		// }
		// );
		// vm.events.push(
		// {
		// 	name: 'In-card mixed actions',
		// 	description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
		// 	date: '7 dec.',
		// 	image: 'https://unsplash.it/400/300?image=836',
		// 	isFavorite: true,
		// 	publisher: {
		// 	name: 'User',
		// 	image: 'svg-2'
		// 	},
		// 	comments: [
		// 	{
		// 		user: {
		// 		name: 'User',
		// 		image: 'svg-2'
		// 		},
		// 		comment: 'Comment'
		// 	}
		// 	]
		// }
		// );
	});
	
	})();