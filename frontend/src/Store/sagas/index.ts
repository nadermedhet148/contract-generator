import { fork  } from 'redux-saga/effects'
import getUser from './getUser'
import createContract from './createContract'
import watchGetContract from './getContract'


export default function* watchMany() {  
  yield fork(getUser)
  yield fork(createContract)
  yield fork(watchGetContract)

}
