// const { param } = require('../../routes/transportationRoutes');

const data = require("./TransportationBaseValues.json").kgCO2perunit;
const converters = require("./conversionVars");

const frequency = {
  daily: 1,
  weekly: 7,
  biweekly: 14,
  monthly: 30,
  quarterly: 90,
  annually: 365,
};

const calculateCFForParam = (paramObj) => {
  let [paramKey, value] = Object.entries(paramObj)[0];
  let cf = data[paramKey]["value"] * frequency[value["frequency"]];
  cf = converters.changeUnits(cf, data[paramKey]["value"], value["units"]);
  return cf;
};

const calculateCFForDate = (record_details) => {
  let cfDate = 0.0;
  // console.log(record_details);
  for (const key in record_details) {
    if (key !== "createdAt") {
      cfDate += calculateCFForParam({ [key]: record_details[key] });
    }
  }
  //   console.log(cfDate);
  return cfDate;
};

const calculateTotalCF = () => {};

module.exports = { calculateCFForDate };
