const mongoose = require('mongoose');
const playerSchema = require('./playerSchema');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: String,
    status: String,
    capacity: Number,
    playerTurn: Number,
    admin: playerSchema,
    cards: [String],
    players: [playerSchema]
});

module.exports = roomSchema;

