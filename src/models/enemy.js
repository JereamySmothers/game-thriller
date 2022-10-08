const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const EnemySchema = new Schema(
    {

    }
);

const Enemy = model('Enemy', EnemySchema);

module.exports = Enemy;