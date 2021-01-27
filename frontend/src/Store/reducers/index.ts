import { combineReducers } from 'redux'
import users from './users';
import contracts from './contracts';


const contractApp = combineReducers({
  users,
  contracts
})

export default contractApp
