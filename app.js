const Joi = require("joi");
const express = require("express");

// initialize
const app = express();

// adding piece of middleware
// add to the request response
app.use(express.json());

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

// Create
app.post("/api/courses", (req, res) => {
  // input validation
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate(req.body);
  console.log(result);

  // if (!req.body.name || req.body.name.length < 3) {
  //   // 400 bad request
  //   res.status(400).send("Name is required and should be minimum 3 characters");
  //   return;
  // }

  // with JOI the above can be converted to the below
  if (result.error) {
    // 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

// handling update method
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found!");

  // input validation
  // const result = validateCourse(req.body); //this can be written in destructive manner
  const { error } = validateCourse(req.body);

  // with JOI the above can be converted to the below
  if (error) {
    // 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

// delete method
app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given id was not valid!");

  // find index
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

// app.get("/api/courses/:id", (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     res.status(404).send("The course with the given ID was not found!");
//   res.send(course);
// });

// // colon indicates parameter for necessary
// app.get("/api/course/:year/:month", (req, res) => {
//   res.send(req.params);
// });

// // query parameter for optional objects
// // localhost:3090/api/course/2022/4?sortBY=Name
// app.get("/api/course/:year/:month", (req, res) => {
//   res.send(req.query);
// });

port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Listening on port ${port}...`));
