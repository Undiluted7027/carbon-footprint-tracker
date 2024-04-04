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

const calAirDistance = (airports) => {
  const from = [airports[0].lat, airports[0].lon];
  const to = [airports[1].lat, airports[1].lon];
  const earthRadius = 6371; // Earth's radius in kilometers
  const dLat = toRadians(from[0] - to[0]);
  const dLon = toRadians(from[1] - to[1]);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(to[0])) * Math.cos(toRadians(from[0])) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  return distance.toFixed(2);
}

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}

const calculateCFForParam = async(paramObj) => {
  let [paramKey, value] = Object.entries(paramObj)[0];
  let [subParamKey, subValue] = Object.entries(value)[0];
  console.log(subValue);
  if (subParamKey === "loc_start"){
    if (subValue.includes("No") || subValue.length < 3){
      let airports = {
        0: {
          code: subValue[0],
          lat: "",
          lon: "",
        },
        1: {
          code: subValue[1],
          lat: "",
          lon: ""
        }
      }
      for (let i=0; i < 2; i++){
        try{
          const latlon = await sendAirRequest(subValue[i]);

          airports[i].lat = latlon.Latitude;
          airports[i].lon = latlon.Longitude; 
        } catch(error){
          console.error(error.message);
        }
      }
      const distance_km = calAirDistance(airports);
      // console.log('Distance in km: ', distance_km);
      const distance_mi = converters.changeUnits(distance_km, "mile", "kilometer");
      // console.log('Distance in miles: ', distance_mi);
      if (distance_mi < 300){
        const passengers = 60;
        const passenger_mile = passengers*distance_mi;
        const em_factor = 0.207;
        const cf = em_factor*passenger_mile*parseInt(value["trips_num"]);
        // console.log(em_factor, passenger_mile, parseInt(value["trips_num"]));
        return cf;
      }
      else{
        const passengers = 853;
        const passenger_mile = passengers*distance_mi;
        const em_factor = 0.129;
        const cf = em_factor*passenger_mile*parseInt(value["trips_num"]);
        // console.log(em_factor, passenger_mile, parseInt(value["trips_num"]));
        return cf;
      }

    }
  }
};

// Function to send air request
const sendAirRequest = async (code) => {
  try {
    const url = `https://api.lufthansa.com/v1/mds-references/airports/${code}?lang=en&limit=10&offset=0&LHoperated=0`;
    const token = "q74rm4bp45bxzt55ugcyzb3t";
    const payload = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };
  
    const response = await fetch(url, payload);
    if (!response.ok) {
      throw new Error('Network response not ok when retrieving airports');
    }
  
    const data = await response.json();
    console.log(data["AirportResource"]["Airports"]["Airport"]["Position"]["Coordinate"]);
    return data["AirportResource"]["Airports"]["Airport"]["Position"]["Coordinate"];
  } catch (error) {
    console.error('Error getting data:', error);
    throw error; // Rethrow the error to be caught by the caller
  }
};

// Function to calculate carbon footprint for a date
const calculateCFForDate = async (record_details) => {
  if (record_details){
    const {loc_start, trips_num} = record_details;
    const airplane_data = {
      "airplane_data": {
        loc_start, trips_num
      }
    }
    try{
      return await calculateCFForParam(airplane_data);
    } catch(error){
      console.error(error.message);
    }
  }
};

const calculateTotalCF = () => {
};

module.exports = { calculateCFForDate, }
