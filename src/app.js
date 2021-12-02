require("./db/connection")
const yargs = require("yargs")
const { addBook, listBooks } = require("./book/bookMethods")

const app = async (args) => {
    switch (process.argv[2]) {
        case "add":
            addBook({ author: args.author, title: args.title })
            break;
        case "list":
            listBooks();
            break;
        default:
            console.log("Incorrect command")
            break;
    }
}

app(yargs.argv);