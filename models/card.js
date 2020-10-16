const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    cardValue: { type: String, required: true },
    src: { type: String},
    rules: { type: String}
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;