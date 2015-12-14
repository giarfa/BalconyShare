(function(){
	'use strict';
	
	// Prepare the 'users' module for subsequent registration of controllers and delegates
	angular
	.module('home', [])
	.controller('HomeController', 
	function() {
		var vm = this;
	
		vm.events = [];
		
		vm.events.push(
		{
			name: 'Lucca Summer Festival',
			description: 'Mustache esse vinyl, food truck celiac cold-pressed blue bottle minim non keytar austin nesciunt street art. Disrupt laboris farm-to-table, retro jean shorts umami dreamcatcher cray reprehenderit.',
			date: '7 jul.',
			image: 'http://temi.repubblica.it/UserFiles/spettacoli-lucca-summer-festival-2015/Image/640x357-lsf.jpg',
			isFavorite: true,
			publisher: {
			name: 'Ernesto',
			image: 'svg-5'
			},
			comments: [
			{
				user: {
				name: 'Lawrence',
				image: 'svg-4'
				},
				comment: 'Last year was REALLY fantastic!!'
			}
			]
		}
		);
		vm.events.push(
		{
			name: 'Woodstock 2.0',
			description: 'Crucifix voluptate pitchfork, brunch leggings meggings slow-carb wolf chia food truck irure green juice viral. Nisi butcher fugiat, lumbersexual shoreditch whatever tempor photo booth microdosing mollit freegan cred mumblecore cold-pressed leggings. Literally blue bottle pinterest, scenester franzen mumblecore lomo dreamcatcher dolore intelligentsia do.',
			date: '15 aug.',
			image: 'http://www.loschermo.it/imagecache/articoli/foto1/woodstock_800_800.jpg',
			isFavorite: false,
			publisher: {
			name: 'Gani',
			image: 'svg-6'
			},
			comments: [
			// {
			// 	user: {
			// 	name: 'User',
			// 	image: 'svg-2'
			// 	},
			// 	comment: 'Comment'
			// },
			// {
			// 	user: {
			// 	name: 'User',
			// 	image: 'svg-2'
			// 	},
			// 	comment: 'Comment'
			// }
			]
		}
		);
		// vm.events.push(
		// {
		// 	name: 'In-card mixed actions',
		// 	description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene\'s musical language: feel it. It\'s a simple request, as well...',
		// 	date: '9 oct.',
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
		// 	date: '4 sep.',
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