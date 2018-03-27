/*
properties of an action:
  1. is an object
  2. have a property called `type`
  3. optional data stored in `payload` or `data` property
*/

/* properties of action creators
  - they are functions
  - they return an `action`
  - they accept optional arguments for dynamic values of the action.
*/

export const SEARCH_RESTAURANTS = 'SEARCH_RESTAURANTS'
export const SEARCH_RESTAURANTS_PENDING = 'SEARCH_RESTAURANTS_PENDING'
export const SEARCH_RESTAURANTS_REJECTED = 'SEARCH_RESTAURANTS_REJECTED'
export const SEARCH_RESTAURANTS_FULFILLED = 'SEARCH_RESTAURANTS_FULFILLED'
export const REJECT_RESTAURANT = 'REJECT_RESTAURANT'
export const ACCEPT_RESTAURANT = 'ACCEPT_RESTAURANT'

export const searchRestaurants = (queryString) => {
  let restaurants = fetch(`http://localhost:3000/yelp/search${queryString}`)
                    .then(resp => resp.json())
                    .then (json => {
                      return json
                    })
  return {
    type: SEARCH_RESTAURANTS,
    payload: restaurants
  }
}

export const rejectRestaurant = () => {
  return {
    type: REJECT_RESTAURANT
  }
}

export const acceptRestaurant = (acceptedRestaurantIndex) => {
  return {
    type: ACCEPT_RESTAURANT,
    payload: {acceptedRestaurantIndex}
  }
}
