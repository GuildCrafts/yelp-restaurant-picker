const express = require('express')
const app = express()
const YelpApi = require('./yelp_api')

app.use(express.static('public'))

// routes to access Yelp's api endpoints
app.get('/yelp/search', (req, res) => {
  let params = req.query
  console.log('query::', req.query);
  YelpApi.search(params)
    .then(results => {
      res.set('Access-Control-Allow-Origin', '*')
      res.json(results.data)
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
