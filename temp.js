var _ = require("lodash");

var countryTimeseries = require("./data/country-series");

_.each(countryTimeseries, (ct) => {
  console.log(ct.target, ct.datapoints.length);
});
