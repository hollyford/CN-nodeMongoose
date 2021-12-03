const mongoose = require("mongoose");
const Publisher = require("./publisherModels");

// Add publisher
exports.addPublisher = async (pubObj) => {
    try {
        const publisher = await new Publisher(pubObj);
        await publisher.save();
        console.log(`Sucessfully added ${publisher.name}`);
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    };
}

exports.listPublishers = async () => {
    try {
        console.log(await Publisher.find({}))
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    };
};


    exports.listBooks = async () => {
        try {
            console.log(await Book.find({}));
            mongoose.connection.close();
        } catch (error) {
            console.log(error)
        }
    }

