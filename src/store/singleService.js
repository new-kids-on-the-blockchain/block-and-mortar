import axios from "axios";
const baseURL = 'http://localhost:8080/api'

//action type
const GET_SINGLE_SERVICE = "GET_SINGLE_SERVICE";

//creators
export function getServiceById(service) {
  return {
    type: GET_SINGLE_SERVICE,
    service
  }
}

//thunk
export function fetchServiceById(id){
    return function thunk(dispatch){
        return axios.get(`/services/${id}`, {baseURL})
        .then(res => res.data)
        .then(service => dispatch(getServiceById(service)))
        .catch(err => console.log(err));
    }
  }


//reducer
export default function reducer (service = {}, action){
    switch (action.type) {
        case GET_SINGLE_SERVICE:
            return action.service;
        default:
            return service;
    }
}

