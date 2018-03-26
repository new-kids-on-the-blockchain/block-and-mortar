import axios from "axios";

//ACTION TYPES
const GET_THREADS = 'GET_THREADS';
const ADD_THREAD = 'ADD_THREAD';

//ACTION CREATORS
const getThreads = threads => ({ type: GET_THREADS, threads })
const addThread = thread => ({ type: ADD_THREAD, thread})

//THUNK CREATORS
export function fetchThreads() {
  return function thunk(dispatch) {
    return axios.get('/api/threads')
      .then(res => res.data)
      .then(threads => dispatch(getThreads(threads)))
      .catch(err => console.err('error fetching threads', err))
  }
}

export function postThread(thread, ownProps) {
  console.log("this thread is in the thunk:", thread)
  return function thunk(dispatch) {
    return axios.post('/api/threads', thread)
    .then(res => addThreadAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to post thread"))
  }
}

//REDUCER
export default function reducer(threads = [], action) {
  switch (action.type) {
    case GET_THREADS:
      return action.threads;
    case ADD_THREAD:
      return action.thread;
    default:
      return threads
  }
}

//HELPER FUNCTIONS
function addThreadAndRedirect(thread, ownProps, dispatch) {
  dispatch(addThread(thread));
  ownProps.history.push('/messages');
}
