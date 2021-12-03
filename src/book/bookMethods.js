const mongoose = require("mongoose");
const Book = require("./bookModels");

exports.addBook = async (bookObj) => {
    try{
        const book = await new Book(bookObj);
        await book.save();
        console.log(`Successfully added ${book.title}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}

exports.listBooks = async () => {
    try {
        console.log(await Book.find({}));
        mongoose.connection.close();
    }catch (error) {
        console.log(error)
    }
}
// find one by title:
exports.findOne = async (bookObj) => {
    try {
        console.log(await Book.findOne({title: bookObj}))
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}
// find many by author
exports.findMany = async (bookObj) => {
    try {
        console.log(await Book.find({author: bookObj}))
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}

exports.deleteBook = async (bookObj) => {
    try {
        await Book.deleteOne({title: bookObj})
        console.log(`You have deleted: ${bookObj}`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}
// update one by title:
exports.amendBook = async (bookId, bookObj) => {
    try {
        await Book.findByIdAndUpdate(bookId, bookObj, {upsert: true})
        console.log(`Successfully amended`)
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    }
}