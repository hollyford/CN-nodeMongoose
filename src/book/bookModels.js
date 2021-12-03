const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    rating: {
        type: Number,
    }
})

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;