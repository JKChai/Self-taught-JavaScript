const express = require("express");
const app = express();
const logger = require("./logger");

// req => middleware => res

// app.get("/", (req, res) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date();
//   console.log(method, url, time);
//   res.send("Home Page");
// });
/* Convert the above to the below */

/* Move code below to a new module as logger.js */
// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date();
//   console.log(method, url, time);
//   // either terminate or pass it on to other middleware
//   //res.send("Logger Middleware"); // sending request will terminate the process
//   // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//   // received Error if sending request and passed to other middleware
//   next(); // pass it to other callback
// };

// global method that invoke the middleware for all routes below
// a base path included can be use for the endpoint that has the path
// order matter for more than 1 middleware as callback
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About");
});

// create new routes
app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Listening on port ${port}...`));
