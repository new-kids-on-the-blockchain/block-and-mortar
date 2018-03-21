// import axios from "axios";
// import AddService from '../components/AddService';
// const baseURL = 'http://localhost:8080/api'

// /**
//  * INITIAL STATE
//  */
// const defaultAgreements = []

// /**
//  * ACTION TYPES
//  */
// const GET_AGREEMENTS = 'GET_AGREEMENTS';
// const ADD_AGREEMENT = 'ADD_AGREEMENT'

// /**
//  * ACTION CREATORS
//  */
// const getAgreements = agreements => ({type: GET_AGREEMENTS, agreements})
// const addAgreement = agreement=> ({type: ADD_AGREEMENT, agreement})

// /**
//  * THUNK CREATORS
//  */
// export function fetchAgreements() {
//   return function thunk(dispatch) {
//     return axios.get('/agreements', {baseURL})
//       .then(res => res.data)
//       .then(agreements => dispatch(getAgreements(agreements)))
//       .catch(err => console.log(err))
//   }
// }

// // export function postAgreement(agreement, ownProps) {
// //   return function thunk(dispatch) {
// //     return axios.post('/agreements', agreement, {baseURL})
// //       .then(res => addAgreementAndRedirect(res.data, ownProps, dispatch))
// //       .catch(err => console.log(err, "failed to post agreement "))
// //   }
// // }

// export function postAgreement(blockChainContractId, ownProps) {
//   return function thunk(dispatch) {
//     return axios.post('/agreements', blockChainContractId, {baseURL})
//       .then(res => dispatch(AddService(res.data)))
//       .catch(err => console.log(err, "failed to post agreement "))
//   }
// }

// /**
//  * REDUCER
//  */
// export default function reducer(state = defaultAgreements, action) {
//   switch (action.type) {
//     case GET_AGREEMENTS:
//       return [...defaultAgreements, ...action.agreements]
//     case ADD_AGREEMENT:
//       return [...state, action.agreement]
//     default:
//       return state
//   }
// }


// /**
//  * HELPER FUNC
//  */
// // function addAgreementAndRedirect(agreement, ownProps, dispatch) {
// //   dispatch(addAgreement(agreement));
// //   ownProps.history.push(`/agreements/${agreement.id}`)
// // }
