const express = require("express");
var _ = require("lodash");

// initalize express application
const app = express();

// adding piece of middleware
// add to the request response
// convert all data into JSON format as response
app.use(express.json());

var countryTimeseries = require("./data/country-series");
var timeseries = require("./data/timeseries");

// initialize annotation data
var annotation = {
  name: "annotation name",
  enabled: true,
  datasource: "generic datasource",
  showLine: true,
};

var annotations = [
  {
    annotation: annotation,
    title: "Hello JS! This is Python.",
    time: 1450754160000,
    text: "teeext",
    tags: "taaags",
  },
  {
    annotation: annotation,
    title: "Wow Python you are so easy.",
    time: 1450754160000,
    text: "teeext",
    tags: "taaags",
  },
  {
    annotation: annotation,
    title: "Oh JS you are so Java.",
    time: 1450754160000,
    text: "teeext",
    tags: "taaags",
  },
];

// if "table" is requested as "targets"
var table = {
  columns: [
    { text: "Time", type: "time" },
    { text: "Country", type: "string" },
    { text: "Number", type: "number" },
  ],
  rows: [
    [1234567, "SE", 123],
    [1234567, "DE", 231],
    [1234567, "US", 321],
  ],
};

// provide CORS headers
// Q: Does setting ot not setting CORS header make any differences?
function setCORSHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "accept, content-type");
}

// Implement 3 endpoints

// note that res.end() is used to end the process quickly without sending data
// https://expressjs.com/en/4x/api.html#res.end
// res.send is combination of res.write(), res.setHeaders(), & res.end()
// res.json send response converted to JSON string using JSON.stringify()
// https://expressjs.com/en/4x/api.html#res.json

// GET / with 200 status code response.
// Used for "Test connection" on the datasource config page.
app.get("/", function (req, res) {
  // setCORSHeaders(res);
  res.status(200).send("Success: 200");
});

// POST /search to return available metrics
app.post("/search", function (req, res) {
  // setCORSHeaders(res);
  var result = [];
  _.each(timeseries, function (ts) {
    // collect target into an array
    // in this case, these targets are
    // ['upper_25', 'upper_50', 'upper_75', 'upper_90', 'upper_95']
    result.push(ts.target);
  });

  // send the reponse in JSON format
  // Q: Will not sending in JSON make a difference in Grafana?
  res.json(result);
});

// POST /query to return panel data or annotations.
app.post("/query", function (req, res) {
  // setCORSHeaders(res);
  console.log(req.url);
  console.log(req.body);

  var tsResult = [];
  let fakeData = timeseries;

  // if "adhocFilters" is given from the response body"
  if (req.body.adhocFilters && req.body.adhocFilters.length > 0) {
    fakeData = countryTimeseries;
  }

  // process payload with "targets" as key
  _.each(req.body.targets, function (target) {
    // if "type":"table" exists push the table into the
    // temporary array tsResult
    if (target.type === "table") {
      tsResult.push(table);
    } else {
      // if adhocFilters exist then use the countryTimeseries data
      // if not use the timeseries data
      // both are structure as {"target":str, "datapoints":arr[arr[int,int]]}
      // timeseries JSON length 5 length datapoints 205
      // country-series JSON length 5 length datapoints 541

      // below looks at any of these is in the payload
      // "target":['upper_25', 'upper_50', 'upper_75', 'upper_90', 'upper_95']
      // if so, get that data only as k
      var k = _.filter(fakeData, function (t) {
        return t.target === target.target;
      });

      // use the filtered {"target":str, "datapoints":arr[arr[int,int]]}
      // push into the teResult array
      _.each(k, function (kk) {
        tsResult.push(kk);
      });
    }
  });

  // this will be either the table data or the filtered target data
  res.json(tsResult);
  // res.end(); // see if an error will be thrown
  // this does not need to provide unless is sending empty response
});

// annotations specified
app.post("/annotations", function (req, res) {
  // setCORSHeaders(res);
  console.log(req.url);
  console.log(req.body);

  res.json(annotations);
  // res.end();
});

// The rest below are optional
// Those 3 endpoints are optional:
// POST /variable to return data for Variable of type Query.
// POST /tag-keys returning tag keys for ad hoc filters.
// POST /tag-values returning tag values for ad hoc filters.

// optional data for the optional endpoints
// var tagKeys = [{ type: "string", text: "Country" }];
// var countryTagValues = [{ text: "SE" }, { text: "DE" }, { text: "US" }];

// app.all("/tag[-]keys", function (req, res) {
//   setCORSHeaders(res);
//   console.log(req.url);
//   console.log(req.body);

//   res.json(tagKeys);
//   res.end();
// });

// app.all("/tag[-]values", function (req, res) {
//   setCORSHeaders(res);
//   console.log(req.url);
//   console.log(req.body);

//   if (req.body.key == "City") {
//     res.json(cityTagValues);
//   } else if (req.body.key == "Country") {
//     res.json(countryTagValues);
//   }
//   res.end();
// });

// setting up ports
port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/////@@##**##@@=-+-=-+-=-+-=-+-=@@##**##@@/////

// Not so useful; just for understanding purposes

// var now = Date.now();
// return milliseconds elapsed since UNIX epoch

// for (var i = timeseries.length - 1; i >= 0; i--) {
//   // i = 4 -> 3 -> 2 -> 1 -> 0 -> break
//   // Object.keys(timeseries) -> ['target': str, 'datapoints': arr[arr[int, int]]]
//   var series = timeseries[i];
//   var decreaser = 0;

//   //   for (var y = series.datapoints.length - 1; y >= 0; y--) {
//   // length of each datapoints are 205
//   //     series.datapoints[y][1] = Math.round((now - decreaser) / 1000) * 1000;
//   //     decreaser += 50000;
//   //   }
// }
