const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/project-3-practice"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, seUnifiedTopology: true   })
  .then(() => console.log('MongoDB Connected...'))

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
});

const Room = mongoose.model("room", roomSchema);
module.exports.Room = Room;