import React, { Component } from 'react';
import Loading from './loading'
import Restaurant from './restaurant'
import RestaurantDetail from './restaurant_detail'
import RestaurantSelectButtons from './restaurant_select_buttons'
import { makeQuery } from '../../common/utils'
import { connect } from 'react-redux'
import { searchRestaurants, rejectRestaurant, acceptRestaurant } from '../actions'

// What do we need to store?
// We need a way to search for restaurants so that the app can give us options

// We need to show a single restaurant on the page, with a Yes or No button

// when user clicks on NO
// => move currentRestaurant to rejectedRestaurants

// when user clicks on YES
// => move currentRestaurant to acceptedRestaurants
//    and move to restaurant detail page.

class App extends Component {
  constructor(props) {
    super(props)
    this.onRestaurantReject = this.onRestaurantReject.bind(this)
    this.onRestaurantAccept = this.onRestaurantAccept.bind(this)
  }

  onRestaurantReject() {
    this.props.rejectRestaurant()
  }

  onRestaurantAccept() {
    console.log('calling onRestaurantAccept');
    this.props.acceptRestaurant(this.props.currentRestaurantIndex)
  }

  componentDidMount() {
    let queryString = makeQuery({location: "Oakland"})
    // TODO : add a config for base_url
    this.props.searchRestaurants(queryString)
  }

  render() {
    const {restaurantsFromSearch, currentRestaurantIndex, acceptedRestaurantIndex} = this.props
    if(acceptedRestaurantIndex >= 0) {
      return (
        <RestaurantDetail restaurant={restaurantsFromSearch[acceptedRestaurantIndex]} />
      )

    }
    else if(restaurantsFromSearch.length > 0) {
      let restaurant = restaurantsFromSearch[currentRestaurantIndex]
      return (
        <div>
          <Restaurant restaurant={restaurant} />
          <RestaurantSelectButtons onRestaurantReject={this.onRestaurantReject}
                                   onRestaurantAccept={this.onRestaurantAccept} />
        </div>
      )
    } else {
      return <Loading />
    }
  }
}

const mapStateToProps = function(state) {
  const {restaurantsFromSearch, currentRestaurantIndex, acceptedRestaurantIndex} = state
  return {
    restaurantsFromSearch,
    currentRestaurantIndex,
    acceptedRestaurantIndex
  }
}

const mapDispatchToProps = { searchRestaurants, rejectRestaurant, acceptRestaurant }

export default connect(mapStateToProps, mapDispatchToProps)(App)


/*

Specs:
- as a user I should be able to select a restaurant
- once I select a restaurant I should see the details of the restaurant
- as a user, I should not see a restaurant more than once

App's State
{
  restaurantsSeenIds: ["abcd", "efgh" ...],
  currentRestaurant: {},
  restaurantsToBeSeen: [],
  restaurantSelected: {}
}

*/
