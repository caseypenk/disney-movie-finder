const express = require('express')
const app = express()
const port = 8080
const bodyParser = require("body-parser")
// allows cross-original requests
var cors = require('cors')
// database connection
const db = require("../db.js");

// MIDDLEWARE
// allows cross-original requests
app.use(cors())
// parses request body to make it readable
app.use(bodyParser.json())

// ROUTES
// GET method route
app.get('/', (req, res) => {
  db.query("SELECT * FROM movies", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})