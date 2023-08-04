const mongoose = require('mongoose');

const gameHallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gameRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'GameRoom' }],
});

const GameHall = mongoose.model('GameHall', gameHallSchema);

module.exports = GameHall;
