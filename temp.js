require("dotenv").config();
const express1 = require("./express.js");
const axios = require("axios");

function express(city, tempC) {
  const express = require('express')
    const app = express()
    const port = 3000
    app.get('/', (req, res) => {
      res.send(`The temperature of ${city} is ${tempC}°C`)
    })
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
}
const getTemp = async (latt, long, city) => {
  try {
    const urlTemp = `http://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=${process.env.key}`;
    const {
      data: {
        main: { temp },
      },
    } = await axios(urlTemp);
    const tempC = Math.floor(temp - 273.15);

    express(city, tempC);

    console.log(`The temperature of ${city} is ${tempC}°C`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getTemp;
