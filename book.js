const {
  create,
  getAll,
  getOne,
  getByTitle,
  getByAuthor,
  getByLanguage,
  update,
  remove,
} = require("../models/librery");

const getAllBooks = async (req, res) => {
  try {
    const books = await getAll();
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

const getOneBook = async (req, res) => {
  try {
    const book = await getOne(req.params.id);
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getSortedByTitle = async (req, res) => {
  try {
    const sortedBooks = await getByTitle();
    res.status(200).send(sortedBooks);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getBookByLanguage = async (req, res) => {
  try {
    const book = await getByLanguage(req.params.language);
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const getBookByAuthor = async (req, res) => {
  try {
    const book = await getByAuthor(req.params.author);
    res.status(200).send(book);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const createBook = async (req, res) => {
  try {
    await create(req.body);
    res.status(201).send("Book created");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const updateBook = async (req, res) => {
  try {
    console.log("Update Request:", req.params.id, req.body);
    await update(req.params.id, req.body);
    res.status(200).send("Book updated");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const removeBook = async (req, res) => {
  try {
    await remove(req.params.id);
    res.status(200).send("Book deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = {
  getAllBooks,
  getOneBook,
  getSortedByTitle,
  getBookByLanguage,
  getBookByAuthor,
  createBook,
  updateBook,
  removeBook,
};
