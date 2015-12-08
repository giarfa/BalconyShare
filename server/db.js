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
  date: Sequelize.DATE,
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
	sequelize.sync()
		.then(function() {
			console.log('OK');
		}).catch(function(error) {
		  console.log(error);
		}); 
};