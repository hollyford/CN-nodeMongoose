require("./db/connection")
const yargs = require("yargs")
const { addBook, listBooks, deleteBook, findOne, findMany, amendBook, updateAll, addToAll } = require("./book/bookMethods")

const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addBook({ author: args.author, title: args.title });
            break;
        case "list":
            listBooks();
            break;
        case "delete":
            deleteBook(process.argv[3]);
            break;
        case "list one":
            findOne(process.argv[3]);
            break;
        case "find by author":
            findMany(process.argv[3]);
            break;
        case "amend":
            amendBook({ _id: process.argv[3] }, { title: args.title, author: args.author, genre: args.genre, rating: args.rating });
            break;
        case "amend all":
            updateAll({ author: process.argv[3] }, { title: args.title, author: args.author, genre: args.genre, rating: args.rating });
            break;
        case "add to all": 
            addToAll({ title: args.title, author: args.author, genre: args.genre, rating: args.rating });
            break;
        default:
            console.log("Incorrect command");
            break;
    }
}

app(yargs.argv);