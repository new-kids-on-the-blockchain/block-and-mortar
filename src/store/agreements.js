// import axios from "axios";
// const baseURL = 'http://localhost:8080/api'

// /**
//  * INITIAL STATE
//  */
// const defaultAgreements = []

// /**
//  * ACTION TYPES
//  */
// const GET_AGREEMENTS = 'GET_AGREEMENTS';

// /**
//  * ACTION CREATORS
//  */
// const getAgreements = agreements => ({type: GET_AGREEMENTS, agreements})

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

// /**
//  * REDUCER
//  */
// export default function reducer(state = defaultAgreements, action) {
//   switch (action.type) {
//     case GET_AGREEMENTS:
//       return [...defaultAgreements, ...action.agreements]
//     default:
//       return state
//   }
// }
