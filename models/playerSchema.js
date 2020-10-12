const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    socketId: String,
    name: String,
    connectedSince: Number,
    roomName: String,
    isBot: Boolean
});

module.exports = playerSchema;