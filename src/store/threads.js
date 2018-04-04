import axios from "axios"

//ACTION TYPES
const GET_THREADS = 'GET_THREADS'
const ADD_THREAD = 'ADD_THREAD'
const UPDATE_THREAD_MESSAGES = 'UPDATE_THREAD_MESSAGES'

//ACTION CREATORS
const getThreads = threads => ({ type: GET_THREADS, threads })
const addThread = thread => ({ type: ADD_THREAD, thread})
const updateThread = message => ({ type: UPDATE_THREAD_MESSAGES, message})

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
  return function thunk(dispatch) {
    return axios.post('/api/threads', thread)
    .then(res => addThreadAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to post thread"))
  }
}

export function postMessage(message, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/api/messages', message)
    .then(res => dispatch(updateThread(res.data)))
    .catch(err => console.log(err, "failed to post message"))
  }
}

//REDUCER
export default function reducer(threads = [], action) {
  switch (action.type) {
    case GET_THREADS:
      return action.threads;
    case ADD_THREAD:
      return [...threads, action.thread];
    case UPDATE_THREAD_MESSAGES:
      let threadToUpdate = threads.filter(thread => thread.id === action.message.threadId)[0]
      let updatedThread = {...threadToUpdate,
        messages: [...threadToUpdate.messages, action.message]
      }
      return threads.map(thread =>
        (updatedThread.id === thread.id ? updatedThread : thread)
      )
    default:
      return threads
  }
}

//HELPER FUNCTIONS
function addThreadAndRedirect(thread, ownProps, dispatch) {
  dispatch(addThread(thread));
  ownProps.history.push('/messages');
}
