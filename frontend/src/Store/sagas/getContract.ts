import * as ActionTypes from '../constants/ActionTypes'
import getService from '../services/GetService'
import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_CONTRACT_API } from '../constants/EndPoints';

function* getContract(action) {
     
     const { uniqueIdentifer } = action.payload;
     
   
     try {
       const Contract = yield call(
         getService, 
         GET_CONTRACT_API + `/${uniqueIdentifer}`, 
       )
       
       yield put({ type: ActionTypes.GET_CONTRACT_SUCCEEDED, payload: Contract.data })
     } catch (e) {
       yield put({ type: ActionTypes.GET_CONTRACT_FAILED, payload: {} })
     }
}


function* watchGetContract() {
 yield takeLatest(ActionTypes.GET_CONTRACT_REQUESTED, getContract);
}

export default watchGetContract;