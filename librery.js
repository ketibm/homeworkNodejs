const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  language: String,
  genre: String,
  pages: Number,
  published: Number,
  publisher: String,
  translator: String,
  awards: String,
});

const Book = mongoose.model("Book", bookSchema, "libraries");

const create = async (data) => {
  const book = new Book(data);
  return await book.save();
};

const getAll = async () => {
  return await Book.find({});
};

const getOne = async (id) => {
  return await Book.findOne({ _id: id });
};

const getByTitle = async () => {
  return await Book.find({}).sort({ title: 1 });
};

const getByAuthor = async (author) => {
  return await Book.findOne({ author });
};

const getByLanguage = async (language) => {
  return await Book.find({ language });
};

const update = async (id, data) => {
  return await Book.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await Book.deleteOne({ _id: id });
};

module.exports = {
  create,
  getAll,
  getOne,
  getByTitle,
  getByAuthor,
  getByLanguage,
  update,
  remove,
};
