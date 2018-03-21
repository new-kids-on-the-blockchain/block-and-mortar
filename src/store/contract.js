import BarterAgreement from "../../build/contracts/BarterAgreement.json";
import axios from 'axios'
const baseURL = 'http://localhost:8080/api'

const contract = require("truffle-contract");
const agreementStorage = contract(BarterAgreement);
//this is creating a new instance of BarterAgreement every time

/**
 * INITIAL STATE
 */
const defaultContract = {};

/**
 * ACTION TYPES
 */
const GET_CONTRACT = "GET_CONTRACT";

/**
 * ACTION CREATORS
 */
const setContract = contract => ({ type: GET_CONTRACT, contract });

/**
 * THUNK CREATORS
 */
export const fetchContract = web3 => {
  web3.currentProvider && agreementStorage.setProvider(web3.currentProvider);
  return dispatch =>
    agreementStorage
      .deployed()
      .then(contract => dispatch(setContract(contract)));
};

export const postAgreement = agreement => {
  return function thunk(dispatch) {
    return axios.post('/agreements', agreement)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultContract, action) {
  switch (action.type) {
    case GET_CONTRACT:
      return action.contract;
    default:
      return state;
  }
}
