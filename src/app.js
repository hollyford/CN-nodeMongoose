require("./db/connection")
const yargs = require("yargs")
const { addBook, listBooks, deleteBook, findOne, findMany } = require("./book/bookMethods")

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
        default:
            console.log("Incorrect command");
            break;
    }
}

app(yargs.argv);