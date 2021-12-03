const mongoose = require("mongoose");

const publisherShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    yearFounded: {
        type: Number
    },
    foundedBy: {
        type: String
    },
    specialiseIn: {
        type: String
    }
});

const Publisher = mongoose.model("Publisher", publisherShema);

module.exports = Publisher;