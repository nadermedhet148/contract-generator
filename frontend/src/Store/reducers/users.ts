import * as ActionTypes from '../constants/ActionTypes'

const user = (state, action) => {
  
  switch (action.type) {
    case ActionTypes.GET_USER_SUCCEEDED:   
      return {
        user: action.payload,
      }
    default:
      return state
  }
}

const initialState = {user : null}

const users = (state = initialState, action) => {
  
  switch (action.type) {
    case ActionTypes.GET_USER_SUCCEEDED:      
      return user(state , action)
    default:
      return state
  }
}

export default users;
