const express = require('express')
const app = express()
const YelpApi = require('./yelp_api')

app.use(express.static('public'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
