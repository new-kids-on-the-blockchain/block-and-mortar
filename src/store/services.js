import axios from "axios";
const baseURL = 'http://localhost:8080/api'

/**
 * ACTION TYPES
 */
const GET_SERVICES = 'GET_SERVICES';
const ADD_SERVICE = 'ADD_SERVICE';
const EDIT_SERVICE = 'EDIT_SERVICE';

/**
 * ACTION CREATORS
 */
const getServices = services => ({type: GET_SERVICES, services})
const addService = service => ({type: ADD_SERVICE, service})
const editService = service => ({type: EDIT_SERVICE, service})

/**
 * THUNK CREATORS
 */
export function fetchServices() {
  return function thunk(dispatch) {
    return axios.get('/services', {baseURL})
      .then(res => res.data)
      .then(services => dispatch(getServices(services)))
      .catch(err => console.log(err, 'fetchingService thunk failed'))
  }
}

export function postService(service, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/services', service, {baseURL})
    .then(res => addServiceAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to post service"))
  }
}

export function updateService(service, ownProps) {
  return function thunk(dispatch) {
    console.log('THUNKKKKKKK!!!!!!!')
    return axios.put(`/services/${service.id}`, service, {baseURL})
    .then(res => editServiceAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to update service"))
  }
}

export function updateCompleteService(service, ownProps) {
  return function thunk(dispatch) {
    return axios.put(`/services/${service.id}`, service, {baseURL})
    .then(res => editServiceAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to complete service"))
  }
}

//HOW TO CALL THE FUNCTION IN THE CONTRACT THAT WE'RE INITIATING
//DO WE GET A CONTRACT KEY BACK?
//blockchain(alll data) --> listen for comingback --> post
//export function postContract = ()


/**
 * REDUCER
 */
export default function reducer(services = [], action) {
  switch (action.type) {
    case GET_SERVICES:
      return action.services;
    case ADD_SERVICE:
      return [...services, action.service]
    case EDIT_SERVICE:
      return services.map(service => (service.id === action.service.id ? action.service : service))
    default:
      return services
  }
}



//helperFunc
function addServiceAndRedirect(service, ownProps, dispatch) {
  dispatch(addService(service));
  ownProps.history.push(`/services/${service.id}`);
}

function editServiceAndRedirect(service, ownProps, dispatch) {
  dispatch(editService(service));
  ownProps.history.push(`/services/${service.id}`);
}
