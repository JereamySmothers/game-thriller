//import enemy assets
const { Schema, model } = require('mongoose');

const EnemySchema = new Schema(
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
              
        },
    }
);

const Enemy = model('Enemy', EnemySchema);

module.exports = Enemy;