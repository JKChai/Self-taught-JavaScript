var _ = require("lodash");

var countryTimeseries = require("./data/country-series");

// _.each(countryTimeseries, (ct) => {
//   console.log(ct.target, ct.datapoints.length);
// });

// var now = Date.now();

// console.log(now);
var result = [];
var i = 0;
_.each(countryTimeseries, function (ts) {
  // collect target into an array
  // in this case, these targets are
  // ['upper_25', 'upper_50', 'upper_75', 'upper_90', 'upper_95']
  i += 1;
  result.push({ text: ts.target, value: i });
});

console.log(result);
