const fs = require("fs");

const read = async (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) return reject(err);
      data = JSON.parse(data);
      return resolve(data);
    });
  });
};
const write = async (fileName, data) => {
  data = JSON.stringify(data);
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

const addRecipe = async (data) => {
  let file = await read("recepti.json");
  file.push(data);
  await write("recepti.json", file);
};

const removeRecipe = async (index) => {
  let file = await read("recepti.json");
  file = file.filter((_, i) => Number(index) !== i);
  await write("recepti.json", file);
};

const listRecipes = async () => {
  return await read("recepti.json");
};

const updateRecipe = async (index, updatedRecipe) => {
  let file = await read("recepti.json");
  file[index] = updatedRecipe;
  await write("recepti.json", file);
};

module.exports = {
  read,
  write,
  addRecipe,
  removeRecipe,
  listRecipes,
  updateRecipe,
};
