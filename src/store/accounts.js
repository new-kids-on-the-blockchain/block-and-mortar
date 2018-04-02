//Initial State
const defaultAccounts = []

//Action Types
const GET_ACCOUNTS = 'GET_ACCOUNTS'

//Action Creators
const setAccounts = accounts => ({type: GET_ACCOUNTS, accounts})

//Thunk Creators
export const fetchAccounts = web3  => {
  return dispatch =>
    web3.eth.getAccounts((err, accounts) => dispatch(setAccounts(accounts)))
}

//Reducer
export default function(state = defaultAccounts, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.accounts;
    default:
      return state
  }
}
