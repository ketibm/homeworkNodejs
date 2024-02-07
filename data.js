const fs = require("fs");
const { read, write } = require("./read-write");

const getStudents = async (req, res) => {
  try {
    let output = await parseTemplate("studenti_form");
    res.status(200).send(output);
  } catch (err) {
    res.status(500).send("Bad request!");
  }
};

const redirectStudents = async (req, res) => {
  const { ime, prezime, prosek } = req.body;
  const regExL = /^[a-zA-Z\s]+$/;
  const regExN = /^\d+\.\d{1}$/;
  if (!regExL.test(ime) || !regExL.test(prezime) || !regExN.test(prosek)) {
    return res.status(400).send("Bad request!");
  }
  let fileData = await read(`${__dirname}/../studenti.json`);
  fileData.push(req.body);
  await write(`${__dirname}/../studenti.json`, fileData);
  try {
    res.redirect("/studenti");
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};

const getStudentData = async (req, res) => {
  try {
    let fileData = await read(`${__dirname}/../studenti.json`);
    console.log("File Data:", fileData);
    res.render("index", { fileData });
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};

const deleteStudent = async (req, res) => {
  try {
    const indexToDelete = req.query.i;
    let fileData = await read(`${__dirname}/../studenti.json`);
    if (fileData[indexToDelete]) {
      fileData.splice(indexToDelete, 1);
      await write(`${__dirname}/../studenti.json`, fileData);
      res.redirect("/studenti");
    }
  } catch (err) {
    res.status(500).send("Invalid server error!");
  }
};
const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) {
          return reject(err);
        }
        resolve(content);
      }
    );
  });
};

module.exports = {
  getStudents,
  redirectStudents,
  getStudentData,
  deleteStudent,
};
