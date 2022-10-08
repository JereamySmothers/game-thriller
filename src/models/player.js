const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PlayerSchema = new Schema(
    {

    }
);

const Player = model('Player', PlayerSchema);

module.exports = Player;