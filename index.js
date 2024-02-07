const express = require("express");
const app = express();
const {
  getStudents,
  redirectStudents,
  getStudentData,
  deleteStudent,
} = require("./handlers/data");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/form", getStudents);
app.post("/form", redirectStudents);
app.get("/studenti", getStudentData);
app.get("/brishi", deleteStudent);

app.listen(3000, () => console.log("Server started at port 3000"));
