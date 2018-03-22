import BarterAgreement from "../../build/contracts/BarterAgreement.json";
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
  console.log(web3.currentProvider, 'CURRENT PROVIDER')
  return dispatch =>
    agreementStorage
      .deployed()
      .then(contract => dispatch(setContract(contract)));
};



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
