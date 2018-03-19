import axios from "axios";
const baseURL = 'http://localhost:8080/api'

/**
 * INITIAL STATE
 */
const initState = []

/**
 * ACTION TYPES
 */
const GET_SERVICES = 'GET_SERVICES';
const ADD_SERVICE = 'ADD_SERVICE';

/**
 * ACTION CREATORS
 */
const getServices = services => ({type: GET_SERVICES, services})
const addService = service => ({type: ADD_SERVICE, service})

/**
 * THUNK CREATORS
 */
export function fetchServices() {
  return function thunk(dispatch) {
    return axios.get('/services', {baseURL})
      .then(res => res.data)
      .then(services => dispatch(getServices(services)))
      .catch(err => console.log(err))
  }
}

export function postService(service, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/services', service, {baseURL})
    .then(res => addServiceAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to update service"))
  }
}

//HOW TO CALL THE FUNCTION IN THE CONTRACT THAT WE'RE INITIATING
//DO WE GET A CONTRACT KEY BACK?
//blockchain(alll data) --> listen for comingback --> post
export function postContract = ()


/**
 * REDUCER
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case GET_SERVICES:
      return action.services;
    case ADD_SERVICE:
      return [...state, action.service]
    default:
      return state
  }
}



//helperFunc
function addServiceAndRedirect(service, ownProps, dispatch) {
  dispatch(addService(service));
  ownProps.history.push(`/services/${service.id}`);
}
