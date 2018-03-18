import axios from "axios";
const baseURL = 'http://localhost:8080/api'
const headers = {'Access-Control-Allow-Origin': '*'}

/**
 * INITIAL STATE
 */
const initState = []

/**
 * ACTION TYPES
 */
const GET_SERVICES = 'GET_SERVICES';

/**
 * ACTION CREATORS
 */
const getServices = services => ({type:GET_SERVICES, services})

/**
 * THUNK CREATORS
 */
export function fetchServices() {
  return function thunk(dispatch) {
    return axios.get('/services', {baseURL, headers})
      .then(res => res.data)
      .then(services => dispatch(getServices(services)))
      .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return action.services;
    default:
      return state
  }
}
