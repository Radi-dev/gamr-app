const mongoose = require('mongoose');

const gameRoomSchema = new mongoose.Schema({
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  settings: {
    isPublic: { type: Boolean, default: false },
    maxPlayers: { type: Number, required: true },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const GameRoom = mongoose.model('GameRoom', gameRoomSchema);

module.exports = GameRoom;
