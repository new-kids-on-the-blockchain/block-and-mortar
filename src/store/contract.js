import BarterAgreement from '../../build/contracts/BarterAgreement.json';

/**
 * INITIAL STATE
 */
const currentContract = {}

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
export const fetchContract = (web3, id)  => {
  const contract = require('truffle-contract');
  const barterAgreement = contract(BarterAgreement);
  barterAgreement.setProvider(web3.currentProvider)
  return dispatch => barterAgreement.deployed()
    .then(contract => {
      return contract.getAgreement(id)
    })
    .then(returnedContract => {
      dispatch(setContract(returnedContract))
    })
}

/**
 * REDUCER
 */
export default function (state = currentContract, action) {
  switch (action.type) {
    case GET_CONTRACT:
      return action.contract;
    default:
      return state
  }
}
