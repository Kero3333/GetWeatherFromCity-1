
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
module.exports = express;