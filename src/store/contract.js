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
  const barterAgreement = contract(BarterAgreement); //takes our contract and wraps it to give us access to helper functions
  barterAgreement.setProvider(web3.currentProvider) //sets our contract's Web3 provider to match the state's web3 provider
  return dispatch => barterAgreement.deployed() //deployed() creates an instance of NoteOwnershipContract that represents the default address managed by NoteOwnershipContract
    .then(contract => {
      return contract.getAgreement(id)
    })
    .then(returnedContract => {
      dispatch(setContract(returnedContract)) //then we dispatch our action to our reducer with the returned contract
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
