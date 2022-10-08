const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema(
    {

    }
);

const Player = model('Player', PlayerSchema);

module.exports = Player;