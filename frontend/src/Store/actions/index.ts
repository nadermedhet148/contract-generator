import * as ActionTypes from "../constants/ActionTypes";

export const getUser = (username) => {  
  return {
    type: ActionTypes.GET_USER_REQUESTED,
    payload: { username },
  };
};
export const createContract = (payload) => {
  return {
    type: ActionTypes.CREATE_CONTRACT_REQUESTED,
    payload,
  };
};

export const getContract = (uniqueIdentifer) => {
  return {
    type: ActionTypes.GET_CONTRACT_REQUESTED,
    payload : {uniqueIdentifer},
  };
};
