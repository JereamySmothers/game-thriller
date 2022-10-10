const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const playerSchema = new Schema({
  playerName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  scores: [
    {
      type: Schema.Types.ObjectId,
      ref: "Score",
    },
  ],
});

playerSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

playerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Player = model("Player", playerSchema);

module.exports = Player;