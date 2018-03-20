import { combineReducers } from 'redux';

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

const rootReducer = combineReducers({
  posts: postsReducer,
  profile: profileReducer,
  //restaurants: restaurantsReducer
});


export default rootReducer;
