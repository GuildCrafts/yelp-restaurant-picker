const axios = require('axios')
// TODO: move this api key to a config
const API_KEY = 'sI39JsXMm8NaNk1HpOMYyPecQSCnJZikmb4AH0q3efcP4uiElXOqDS-rqfkzDH8NHNj6GRO3IO28xPNM22LXZhifp-b9IhE5ontj0zhjqm7Ltu1agfbRO6e0guOeWnYx'


function makeQuery(obj) {
  var result = '?'
  for(let key in obj) {
    let str = obj[key] && obj[key].replace(/\s/g, '+')
    if(str) {
      result += `${key}=${str}&`
    }
  }
  return result.slice(0, -1)
}

function search(options) {
  let queryString = makeQuery(options)
  return axios.get(`https://api.yelp.com/v3/businesses/search${queryString}`,
    {headers: {'Authorization': `Bearer ${API_KEY}`}})
    .then(result => {
      return { data: result.data.businesses }
    })
    .catch( err => {
      console.error(err)
      return { error: true, message: err.message }
    })
  }

module.exports = {
  search
}

// create an abstraction to get data from Yelp Api

// import YelpApi from './yelp_api'

/* var restaurantsPromise = YelpApi.search({
                   term: '',
                   location: 'Oakland',
                   coordinates: {lat: 124, lng: 12323}})

restaurantsPromise
  .then(restaurants => {
    console.log(restauarants)
  })

                   */
