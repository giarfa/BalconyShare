var Sequelize = require('sequelize');


var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
var sequelize = new Sequelize(match[5], match[1], match[2], {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     match[4],
    host:     match[3],
    logging: false,
    dialectOptions: {
        ssl: true
    }
});

// var sequelize = new Sequelize(process.env.DATABASE_URL);

var userDataType = sequelize.define('User', {
	name: Sequelize.STRING,
	image: Sequelize.STRING
}, {
	timestamps: false
});

exports.User = userDataType;

var commentDataType = sequelize.define('Comment', {
	comment: Sequelize.TEXT
}, {
	timestamps: false
});
commentDataType.belongsTo(userDataType, { as: 'User' });

exports.Comment = commentDataType;

// see http://docs.sequelizejs.com/en/latest/docs/models-definition/#data-types for Data Types
var eventDataType = sequelize.define('Event', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  date: Sequelize.DATEONLY,
  image: Sequelize.STRING,
  isFavorite: Sequelize.BOOLEAN
}, {
	// see http://docs.sequelizejs.com/en/latest/docs/models-definition/#configuration
	// tableName: 'my_very_custom_table_name',
	// freezeTableName: true,
	timestamps: false
});

// see http://docs.sequelizejs.com/en/latest/api/associations/

// Event will have a property of type User called Publisher, accessible via Event.publisher
eventDataType.belongsTo(userDataType, { as: 'Publisher' });
// Event will have a property of type Array of Comment called Comments, accessible via Event.comments
eventDataType.hasMany(commentDataType, {as: 'Comments' });

// Make the Event object accessible by the entire application 
exports.Event = eventDataType;

exports.syncDb = function() { 
	sequelize.sync({force: true})
		.then(function() {
			console.log('OK');
		}).catch(function(error) {
		  console.log(error);
		}); 
};

exports.setUp = function() {
	userDataType.findById(5).then(function(user){
		eventDataType.create({	name: 'In-card mixed actions',
  								description: 'The titles of Washed Out\'s breakthrough song and the first single from Paracosm.',
  								date: new Date(2015,12,7),
  								image: 'https://unsplash.it/400/300?image=836',
  								isFavorite: true
							})
		.then(function(event) {
			console.log('OK');
			event.setPublisher=user;
			event.save().then(function() {console.log('Updated');});
		}).catch(function(error) {
		  console.log(error);
		});
	}).catch(function(error) {
		  console.log(error);
		});
};