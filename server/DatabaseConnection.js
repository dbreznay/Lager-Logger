const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connection = mongoose.connect('mongodb://localhost:3001/game' {

    useMongoClient: true

});

mongoose.connection.on('error', function(err) {

    console.log('Database connection error');

});

const Schema = mongoose.Schema;

const playerSchema = new Schema({

    socketId: String,
	name: String,
	connectedSince: Number,
	roomName: String,
	isBot: Boolean

});

const roomSchema = new Schema({

    name: String,
	status: String,
	capacity: Number,
	playerTurn: Number,
	admin: playerSchema,
	cards: [String],
    players: [playerSchema],
    gameState: [cards, playerTurn]

});

const Room = mongoose.model('room', roomSchema);

module.exports.Room = Room;