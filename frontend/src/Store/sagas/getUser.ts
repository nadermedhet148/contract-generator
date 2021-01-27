import * as ActionTypes from '../constants/ActionTypes'
import getService from '../services/GetService'
import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_USER_API } from '../constants/EndPoints';

function* getUser(action) {
     
     const { username } = action.payload;
     
   
     try {
       const user = yield call(
         getService, 
         GET_USER_API + `/${username}`, 
       )
       
       yield put({ type: ActionTypes.GET_USER_SUCCEEDED, payload: user.data })
     } catch (e) {
       yield put({ type: ActionTypes.GET_USER_FAILED, payload: {} })
     }
}


function* watchGetUser() {
 yield takeLatest(ActionTypes.GET_USER_REQUESTED, getUser);
}

export default watchGetUser;