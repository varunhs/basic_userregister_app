const mongoose = require("mongoose");

const AudioDetailsScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("audioDetails", AudioDetailsScheme);