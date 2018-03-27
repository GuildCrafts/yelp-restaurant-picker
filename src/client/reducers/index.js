import { combineReducers } from 'redux';
import { SEARCH_RESTAURANTS_PENDING,
         SEARCH_RESTAURANTS_REJECTED,
         SEARCH_RESTAURANTS_FULFILLED,
         REJECT_RESTAURANT,
         ACCEPT_RESTAURANT
       } from '../actions'

const FETCH_POSTS = 'FETCH_POSTS'
const FETCH_PROFILE = 'FETCH_PROFILE'
const SELECT_RESTAURANT = 'SELECT_RESTAURANT'

const profileReducer = (profile={}, action) => {
  switch(action.type) {
    case SELECT_RESTAURANT:
      return {weird: 'true too'}
  }
  return profile
}

/*
properties of a reducing function:
- takes 2 arguments - 1.old state, 2.action
- old state argument must be assigned an default value
- returns new state.
- sometimes new state can be the old state, when we want to ignore the action
*/

const postsReducer = (posts=[], action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return [{id: 1, title: 'hello'}]
    case SELECT_RESTAURANT:
      return posts.concat([{wierd: 'true'}])
    default:
      return posts
  }
}

const restaurantsFromSearchReducer = (restaurantsFromSearch=[], action) => {
  switch(action.type) {
    case SEARCH_RESTAURANTS_FULFILLED:
      console.log('action.payload::', action.payload)
      return action.payload
    case SEARCH_RESTAURANTS_PENDING, SEARCH_RESTAURANTS_REJECTED:
      return restaurantsFromSearch
    default:
      return restaurantsFromSearch
  }
}

const currentRestaurantIndexReducer = (currentRestaurantIndex=0, action) => {
  switch(action.type) {
    case REJECT_RESTAURANT:
      return currentRestaurantIndex + 1
    default:
      return currentRestaurantIndex
  }
}

const acceptedRestaurantIndexReducer = (acceptedRestaurantIndex=-1, action) => {
  switch(action.type) {
    case ACCEPT_RESTAURANT:
      return action.payload.acceptedRestaurantIndex
    default:
      return acceptedRestaurantIndex
  }
}

const rootReducer = combineReducers({
  restaurantsFromSearch: restaurantsFromSearchReducer,
  currentRestaurantIndex: currentRestaurantIndexReducer,
  acceptedRestaurantIndex: acceptedRestaurantIndexReducer,
  posts: postsReducer
});

/*
1. write your reducer function
2. write your action creator function, it could return a promise payload or regular object
3a. connect the redux store to the component, and make it a container
3b. as part of connecting the store you have to implement, mapStateToProps
3c. implement mapDispatchToProps, import all the action creators that you will need in the component
4. use the state(passed in as props) & the action creators in the container.
*/


export default rootReducer;
