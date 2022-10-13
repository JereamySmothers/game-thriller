const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/octocat-game", {});

module.exports = mongoose.connection;
