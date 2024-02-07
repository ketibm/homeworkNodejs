const express = require("express");
const app = express();
const {
  getForm,
  postForm,
  getRecipes,
  deleteRecipes,
  getUpdate,
  postUpdate,
} = require("./controllers/formular");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/form", getForm);
app.post("/form", postForm);
app.get("/recepti", getRecipes);
app.get("/brishi", deleteRecipes);
app.get("/update/:id", getUpdate);
app.post("/update/:id", postUpdate);

app.listen(3000, () => console.log("Server started at port 3000"));
