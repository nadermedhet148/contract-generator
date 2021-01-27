import * as ActionTypes from '../constants/ActionTypes'

const contract = (state, action) => {
  
  switch (action.type) {
    case ActionTypes.GET_CONTRACT_SUCCEEDED:   
      return {
        contract: action.payload,
      }
    case ActionTypes.CREATE_CONTRACT_SUCCEEDED:   
      return {
        contract: action.payload,
      }
    default:
      return state
  }
}

const initialState = {contract : null}

const contracts = (state = initialState, action) => {
  
  switch (action.type) {
    case ActionTypes.GET_CONTRACT_SUCCEEDED:      
      return contract(state , action)
    case ActionTypes.CREATE_CONTRACT_SUCCEEDED:      
      return contract(state , action)
    default:
      return state
  }
}

export default contracts;
