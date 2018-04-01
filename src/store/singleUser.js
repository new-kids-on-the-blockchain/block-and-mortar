import axios from "axios"

//action type
const GET_SINGLE_USER = "GET_SINGLE_USER"

//creators
export function getUserById(user) {
  return {
    type: GET_SINGLE_USER,
    user
  }
}

//thunk
export function fetchUserById(id) {
  return function thunk(dispatch) {
    return axios.get(`/api/users/${id}`)
    .then(res => res.data)
    .then(user => dispatch(getUserById(user)))
    .catch(err => console.log(err));
  }
}

//reducer
export default function reducer(user = {}, action) {
  switch (action.type) {
    case GET_SINGLE_USER:
      return action.user;
    default:
      return user;
  }
}

