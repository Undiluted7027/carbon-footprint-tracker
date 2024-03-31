// const { param } = require('../../routes/transportationRoutes');

const data = require("./TransportationBaseValues.json").kgCO2perunit;
const converters = require("./conversionVars");

const frequency = {
  weekly: 7,
  daily: 1,
  monthly: 31,
};

const kgCO2perunitArray = [];

for (const key in data.kgCO2perunit) {
  if (data.kgCO2perunit.hasOwnProperty(key)) {
    const obj = {
      [key]: data.kgCO2perunit[key],
    };
    kgCO2perunitArray.push(obj);
  }
}

// const transportationMetrics = [
//     thresholds[]
// ]

const calculateCFForParam = (paramObj) => {
  let [paramKey, value] = Object.entries(paramObj)[0];
//   console.log(Object.entries(paramObj)[0]);
  let cf = data[paramKey]["value"] * frequency[value["frequency"]];
  if (value["units"] != "gallon") {
    cf *= converters.LTOGAL;
    // console.log(cf);
  }
//   console.log(cf);
  return cf;
};

const calculateCFForDate = (record_details) => {
  let cfDate = 0.0;
  // console.log(record_details);
  for (const key in record_details) {
    if (key !== "createdAt"){
      cfDate += calculateCFForParam({ [key]: record_details[key] });
    }
  }
//   console.log(cfDate);
  return cfDate;
};

const calculateTotalCF = () => {};

module.exports = { calculateCFForDate };
