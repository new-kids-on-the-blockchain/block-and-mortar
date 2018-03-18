import axios from 'axios';
const baseURL = 'http://localhost:8080/api'

/**
 * INITIAL STATE
 */
const defaultUsers = []

/**
 * ACTION TYPES
 */
const GET_USERS = 'GET_USERS';

/**
 * ACTION CREATORS
 */
const getUsers = users => ({type: GET_USERS, users})

/**
 * THUNK CREATORS
 */
export function fetchUsers() {
  return function thunk(dispatch) {
    return axios.get('/users', {baseURL})
      .then(res => res.data)
      .then(users => dispatch(getUsers(users)))
      .catch(err => console.log(err))
  }
}

/**
 * REDUCER
 */
export default function reducer(state = defaultUsers, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}
