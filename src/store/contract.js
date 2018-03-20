import BarterAgreement from '../../build/contracts/BarterAgreement.json';


/**
 * INITIAL STATE
 */
const defaultContract = {}

/**
 * ACTION TYPES
 */
const GET_CONTRACT = 'GET_CONTRACT';

/**
 * ACTION CREATORS
 */
const setContract = contract => ({type: GET_CONTRACT, contract})

/**
 * THUNK CREATORS
 */
export const fetchContract = web3  => {
  const contract = require('truffle-contract');
  console.log(web3, "WEB 3 FROM FETCHCONTRACT THUNK")
  console.log(web3.currentProvider, "FETCHCONTRACT THUNK WEB 3 PROVIDER!!!!")
  const agreementStorage = contract(BarterAgreement);
  console.log(agreementStorage, "FETCHCONTRACT AGREEMENTSTORAGE")
  web3.currentProvider && agreementStorage.setProvider(web3.currentProvider)
  console.log(web3.currentProvider, "FETCHCONTRACT THUNK CURRENT PROVIDER")
  return dispatch => agreementStorage.deployed().then(contract => dispatch(setContract(contract)))
}

/**
 * REDUCER
 */
export default function (state = defaultContract, action) {
  switch (action.type) {
    case GET_CONTRACT:
      return action.contract;
    default:
      return state
  }
}
