const { makeQuery } = require('../common/utils')
const axios = require('axios')
// TODO: move this api key to a config
const API_KEY = 'sI39JsXMm8NaNk1HpOMYyPecQSCnJZikmb4AH0q3efcP4uiElXOqDS-rqfkzDH8NHNj6GRO3IO28xPNM22LXZhifp-b9IhE5ontj0zhjqm7Ltu1agfbRO6e0guOeWnYx'


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

function topRestaurants() {

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
