const express = require("express");

const app = express();

// http verb/method
/*
app.get();
app.post();
app.put();
app.delete();
*/

// create course object
const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found!");
  res.send(course);
});

// colon indicates parameter for necessary
app.get("/api/course/:year/:month", (req, res) => {
  res.send(req.params);
});

// query parameter for optional objects
// localhost:3090/api/course/2022/4?sortBY=Name
app.get("/api/course/:year/:month", (req, res) => {
  res.send(req.query);
});

port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Listening on port ${port}...`));
