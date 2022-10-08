const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ItemSchema = new Schema(
    {

    }
);

const Items = model('Items', ItemsSchema);

module.exports = Items;