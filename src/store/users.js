import axios from 'axios'

//Action Types
const GET_USERS = 'GET_USERS'

//Action Creators
const getUsers = users => ({type: GET_USERS, users})

//Thunk Creators
export function fetchUsers() {
  return function thunk(dispatch) {
    return axios.get('/api/users')
    .then(res => res.data)
    .then(users => dispatch(getUsers(users)))
    .catch(err => console.log(err))
  }
}

//Reducer
export default function reducer(users = [], action) {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return users
  }
}
