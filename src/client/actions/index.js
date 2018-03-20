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

const fetchProfile(id) {
  return {
    type: 'FETCH_PROFILE',
    payload: {id}
  }
}
