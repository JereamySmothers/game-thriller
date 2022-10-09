const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const scoreSchema = new Schema(
  {
    value: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    playerName: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Score = model("Score", scoreSchema);

module.exports = Score;
