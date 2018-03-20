import React, { Component } from 'react';
import Loading from './loading'
import Restaurant from './restaurant'
import RestaurantDetail from './restaurant_detail'
import RestaurantSelectButtons from './restaurant_select_buttons'
import { makeQuery } from '../../common/utils'

// What do we need to store?
// We need a way to search for restaurants so that the app can give us options

// We need to show a single restaurant on the page, with a Yes or No button

// when user clicks on NO
// => move currentRestaurant to rejectedRestaurants

// when user clicks on YES
// => move currentRestaurant to acceptedRestaurants
//    and move to restaurant detail page.

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        rejectedRestaurants: [],
        acceptedRestaurantIndex: -1,
        restaurantsFromSearch: [],
        currentRestaurantIndex: 0
    }
    this.onRestaurantReject = this.onRestaurantReject.bind(this)
    this.onRestaurantAccept = this.onRestaurantAccept.bind(this)
  }

  onRestaurantReject() {
    this.setState({currentRestaurantIndex: this.state.currentRestaurantIndex + 1})
  }

  onRestaurantAccept() {
    console.log('calling onRestaurantAccept');
    this.setState({acceptedRestaurantIndex: this.state.currentRestaurantIndex})
  }

  componentDidMount() {
    let queryString = makeQuery({location: "Oakland"})
    // TODO : add a config for base_url
    fetch(`http://localhost:3000/yelp/search${queryString}`)
      .then(resp => resp.json())
      .then(json => {
          this.setState({restaurantsFromSearch: json})
      })
  }

  render() {
    console.log('re-rendering App', this.state);
    const {restaurantsFromSearch, currentRestaurantIndex, acceptedRestaurantIndex} = this.state
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
