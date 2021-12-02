const Book = require("./bookModels");

exports.addBook = async (bookObj) => {
    try{
        const book = await new Book(bookObj);
        await book.save();
        console.log(`Successfully added ${book.title}`)
    } catch (error) {
        console.log(error)
    }
}

exports.listBooks = async () => {
    try {
        console.log(await Book.find({}));
    }catch (error) {
        console.log(error)
    }
}
// find one by title:
exports.findOne = async (bookObj) => {
    try {
        console.log(await Book.findOne({title: bookObj}))
    } catch (error) {
        console.log(error)
    }
}
// find many by author
exports.findMany = async (bookObj) => {
    try {
        console.log(await Book.find({author: bookObj}))
    } catch (error) {
        console.log(error)
    }
}

// exports.deleteBook = async (bookObj) => {
//     try {
//         await Book.deleteOne({title: args.title})
//     } catch (error) {
//         console.log(error)
//     }
// }