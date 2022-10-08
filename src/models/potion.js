//import potion assets
const { Schema, model } = require('mongoose');

const PotionSchema = new Schema(
    {
        potionHeal: {
            type: Number,
        },
    }
);

const Potion = model('Potion', PotionSchema);

module.exports = Potion;