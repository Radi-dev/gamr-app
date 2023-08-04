const mongoose = require('mongoose');

const gameStatsSchema = new mongoose.Schema({
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'GameSession', required: true },
  stats: { type: Object, required: true },
});

const GameStats = mongoose.model('GameStats', gameStatsSchema);

module.exports = GameStats;
