const { Player, Score } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {

  Query: {

    me: async (parent, args, context) => {
      if (context.user) {
        const playerData = await Player.findOne({ _id: context.player._id }).select("__v -password").populate("scores");

        return playerData;
      }
      throw new AuthenticationError("Not logged in");
    },

    player: async (parent, { playerName }) => {
      return Player.findOne({ playerName }).select("-__v -password").populate("scores");
    },

    scores: async () => {
      return Score.find()
    },

    score: async (parent, { playerName }) => {
      const params = playerName ? { playerName } : {};
      return Score.find({ playerName });
    },
  },

  Mutation: {
    addPlayer: async (parent, args) => {
      const player = await Player.create(args);
      const token = signToken(player);

      return { token, player };
    },

    login: async (parent, { email, password }) => {
      const player = await Player.findOne({ email });

      if (!player) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await player.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(player);
      return { token, player };
    },

    addScore: async ( parent, args, context ) => {
      if (context.user) {
        const score = await Score.create({ ...args, playerName: context.player.playerName });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { scores: score._id }},
        );

        return score;
      }
    },

    updateScore: async (parent, { _id, currentScore }) => {
      const newScore = oldScore > currentScore ? { oldScore } : { currentScore };

      const updatedScore = await Score.findOneAndUpdate(
        { _id: _id },
        { $push: { score: { newScore }}},
      );

      return updatedScore;
    }
  },
};

module.exports = resolvers;
