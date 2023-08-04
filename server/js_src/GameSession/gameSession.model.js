const mongoose = require('mongoose');

const gameSessionSchema = new mongoose.Schema({
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'GameRoom', required: true },
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  isActive: { type: Boolean, default: true },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
});

const GameSession = mongoose.model('GameSession', gameSessionSchema);

module.exports = GameSession;
