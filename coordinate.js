const getTemp = require("./temp.js");
const axios = require("axios");

const getCoordinate = async (city) => {
  try {
    if (city === undefined) {
      throw new Error("You have to choose a city");
    }
    const urlGeo = `https://geocode.xyz/${city}?json=1`;
    const {
      data: { longt, latt },
    } = await axios(urlGeo);
    getTemp(latt, longt, city);
  } catch (err) {
    console.log(err.message);
    
  }
};
module.exports = getCoordinate;
