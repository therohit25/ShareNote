const mongoose = require('mongoose');
// const { config } = require("dotenv")

// config({
//     path: "./data/config.env"
// })

mongoose.connect("mongodb://localhost:27017/ShareNotes", { useNewUrlParser: true, useUnifiedTopology: true });


module.exports = mongoose