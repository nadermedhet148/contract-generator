import * as ActionTypes from "../constants/ActionTypes";
import PostService from "../services/PostService";
import { call, put, takeLatest } from "redux-saga/effects";
import { CREATE_CONTRACT_API } from "../constants/EndPoints";

function* createContract(action) {
  const form = new FormData();

  Object.keys(action.payload).forEach((key) => {
    form.append(key, action.payload[key]);
  });

  try {
    const contract = yield call(PostService, CREATE_CONTRACT_API, form , {
      userId : action.payload.user?.id
    });

    yield put({
      type: ActionTypes.CREATE_CONTRACT_SUCCEEDED,
      payload: contract.data,
    });
  } catch (e) {
    yield put({ type: ActionTypes.CREATE_CONTRACT_FAILED, payload: {} });
  }
}

function* watchCreateContract() {
  yield takeLatest(ActionTypes.CREATE_CONTRACT_REQUESTED, createContract);
}

export default watchCreateContract;
