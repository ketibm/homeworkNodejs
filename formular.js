const recepti = require("../models/recepti");

const getForm = (req, res) => {
  res.render("formular");
  // formular.js
};

const postForm = async (req, res) => {
  const { recipe, ingredients, preparation, calories } = req.body;

  const parsedIngredients = ingredients.split(",").reduce((obj, ingredient) => {
    const [key, value] = ingredient.split(":");
    obj[key] = value;
    return obj;
  }, {});

  let data = {
    recipe,
    ingredients: parsedIngredients,
    preparation,
    calories,
  };
  await recepti.addRecipe(data);
  res.redirect("./recepti");
};

const getRecipes = async (req, res) => {
  let data = await recepti.listRecipes();
  res.render("recepti", { data });
  // recepti.ejs
};

const deleteRecipes = async (req, res) => {
  await recepti.removeRecipe(req.query.index);
  res.redirect("./recepti");
};

const getUpdate = async (req, res) => {
  const index = req.params.id;
  const data = await recepti.listRecipes();
  const recept = data[index];
  res.render("updateFormular", { i: index, recept });
  // updateFormular.ejs
};

const postUpdate = async (req, res) => {
  const index = req.params.id;
  const { recipe, ingredients, preparation, calories } = req.body;
  const updatedRecipe = {
    recipe,
    ingredients: JSON.parse(ingredients),
    preparation,
    calories,
  };
  await recepti.updateRecipe(index, updatedRecipe);
  res.redirect("/recepti");
};

module.exports = {
  getForm,
  postForm,
  getRecipes,
  deleteRecipes,
  getUpdate,
  postUpdate,
};
