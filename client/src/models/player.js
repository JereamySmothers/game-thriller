// import character assets

const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema(
    {
        playerName: {
            type: String,
            required: true,
        },
        playerHealth: {
            type: Number,
        },
        playerDamage: {
            type: Number,
        },
        playerImg: {
            type: String,
            required: true,
            
        }
    }
);

const Player = model('Player', PlayerSchema);

module.exports = Player;