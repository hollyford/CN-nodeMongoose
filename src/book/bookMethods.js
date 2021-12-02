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