const express = require("express");
const {
  getAllBooks,
  getOneBook,
  getSortedByTitle,
  getBookByLanguage,
  getBookByAuthor,
  createBook,
  updateBook,
  removeBook,
} = require("./controllers/book");
require("./db/config");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/books", getAllBooks);
app.get("/books/id/:id", getOneBook);
app.get("/books/sorted", getSortedByTitle);
app.get("/books/language/:language", getBookByLanguage);
app.get("/books/author/:author", getBookByAuthor);
app.post("/books", createBook);
app.put("/books/:id", updateBook);
app.delete("/books/:id", removeBook);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
