import axios from 'axios';

//ACTION TYPES
const UPDATE_CURRENT_THREAD = 'UPDATE_CURRENT_THREAD';
const UPDATE_THREAD_MESSAGES = 'UPDATE_THREAD_MESSAGES';

//ACTION CREATORS
const updateCurrentThread = currentThread => ({ type: UPDATE_CURRENT_THREAD, currentThread })
const updateThreadMessages = message => ({ type: UPDATE_THREAD_MESSAGES, message })

//THUNK CREATORS
export function setCurrentThread(currentThread) {
  return function thunk(dispatch) {
      dispatch(updateCurrentThread(currentThread))
  }
}

export function postMessage(message, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/api/messages', message)
      .then(res => dispatch(updateThreadMessages(res.data)))
      .catch(err => console.log(err, "failed to post message"))
  }
}

//REDUCER
export default function reducer(currentThread = {}, action) {
  switch (action.type) {
    case UPDATE_CURRENT_THREAD:
      return action.currentThread;
    case UPDATE_THREAD_MESSAGES:
      return Object.assign({}, currentThread, { messages: [...currentThread.messages, action.message]})
    default:
      return currentThread
  }
}
