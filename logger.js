const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log(method, url, time);
  // either terminate or pass it on to other middleware
  //res.send("Logger Middleware"); // sending request will terminate the process
  // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
  // received Error if sending request and passed to other middleware
  next(); // pass it to other callback
};

// export as a module
module.exports = logger;
