const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/octocat-game", {});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/octocat-game", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
