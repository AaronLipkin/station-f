const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
	name: 			String,
	description: 	String ,
	capacity: 		Number,
	equipements: 	Array,
	createdAt: 		Date,
	updatedAt: 		Date
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
