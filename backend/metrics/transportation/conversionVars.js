const LTOGAL = 0.2641720524;
const GALTOL = 3.785411784;

const MLTOGAL = 0.0002641721;
const GALTOML = 378.5411784;

const changeUnits = (cf, unitThresh, unitUser) => {
  if (unitThresh !== unitUser){
    switch (unitThresh) {
    case "gallon":
      switch (unitUser) {
        case "litre":
          cf *= LTOGAL;
          break;
        case "millilitre":
          cf *= MLTOGAL;
          break;
        case "oz":
          cf *= OZTOGAL;
          break;
        case "m3":
          cf *= M3TOGAL;
          break;
        case "ft3":
          cf *= FT3TOGAL;
          break;
        case "in3":
          cf *= IN3TOGAL;
          break;
      }
    case "mile":
      switch (unitUser) {
        case "kilometer":
          cf *= 0.6214;
          break;
        case "meter":
          cf *= 0.0006213712;
          break;
        case "yard":
          cf *= 0.0005681818;
          break;
        case "foot":
          cf *= 0.0001893939;
          break;
        case "inch":
          cf *= 0.0000157828;
          break;
        case "nautical mile":
          cf *= 1.15078;
          break;
      }
    case "scf":
      switch (unitUser) {
        case "m3":
          cf *= 35.31466672148859;
          break;
        case "litre":
          cf *= 0.03531466672148859;
          break;
        case "boe":
          cf *= 5.614583333333334;
          break;
        case "mscf":
          cf *= 1000;
          break;
        case "mmscf":
          cf *= 1000000;
          break;
        case "millilitre":
          cf *= 0.00003531466672148859;
          break;
        case "mi3":
          cf *= 147197952000;
          break;
        case "km3":
          cf *= 35314666721.488594;
          break;
        case "cm3":
          cf *= 0.00003531466672148859;
          break;
        case "gal":
          cf *= 0.13368055555555558;
          break;
      }
  }
}
  return cf;

};

const convertToTrees = (cf) => {
    return Math.round(0.03837209302325582*cf);
}

const convertToGasoline = (cf) => {
    return Number((cf/8.89).toFixed(2));
}

const convertToCars = (cf) => {
    return Math.round(cf/12.6027397260274);
}

// (kg CO2)*(Kg CO2)

module.exports = {
  changeUnits,
  convertToTrees,
  convertToGasoline,
  convertToCars
};
