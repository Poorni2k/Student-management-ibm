const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let studentRecords = [];

// GET all students
app.get("/api/students", (req, res) => {
  res.json(studentRecords);
});

// POST new student
app.post("/api/students", (req, res) => {
  const newStudent = {
    id: studentRecords.length + 1,
    name: req.body.name,
    department: req.body.department,
    age: req.body.age
  };

  studentRecords.push(newStudent);
  res.status(201).json(newStudent);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
