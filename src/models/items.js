const { Schema, model } = require('mongoose');

const ItemsSchema = new Schema(
    {

    }
);

const Items = model('Items', ItemsSchema);

module.exports = Items;