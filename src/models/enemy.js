const { Schema, model } = require('mongoose');

const EnemySchema = new Schema(
    {

    }
);

const Enemy = model('Enemy', EnemySchema);

module.exports = Enemy;