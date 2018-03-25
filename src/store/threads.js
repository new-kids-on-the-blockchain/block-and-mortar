import axios from "axios";

//ACTION TYPES
const GET_THREADS = 'GET_THREADS';

//ACTION CREATORS
const getThreads = threads => ({ type: GET_THREADS, threads })

//THUNK CREATORS
export function fetchThreads() {
  return function thunk(dispatch) {
    return axios.get('/api/threads')
      .then(res => res.data)
      .then(threads => dispatch(getThreads(threads)))
      .catch(err => console.err('error fetching threads', err))
  }
}

//REDUCER
export default function reducer(threads = [], action) {
  switch (action.type) {
    case GET_THREADS:
      return action.threads;
    default:
      return threads
  }
}
