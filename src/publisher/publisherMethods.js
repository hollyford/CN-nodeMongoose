const mongoose = require("mongoose");
const Publisher = require("./publisherModels");

// Add publisher
exports.addPublisher = async (pubObj) => {
    try {
        const pub = await new Publisher(pubObj);
        await pub.save();
        console.log(`Sucessfully added ${pub.name}`);
        mongoose.connection.close();
    } catch (error) {
        console.log(error)
    };
}

exports.listPubs

