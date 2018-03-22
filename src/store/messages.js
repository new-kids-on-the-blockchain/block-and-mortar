import axios from "axios";
const baseURL = 'http://localhost:8080/api'

/**
 * ACTION TYPES
 */
const GET_MESSAGES = 'GET_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';

/**
 * ACTION CREATORS
 */
const getMessages = messages => ({type: GET_MESSAGES, messages})
const addMessage = message => ({type: ADD_MESSAGE, message})

/**
 * THUNK CREATORS
 */
export function fetchMessages() {
  return function thunk(dispatch) {
    return axios.get('/messages', {baseURL})
      .then(res => res.data)
      .then(messages => dispatch(getMessages(messages)))
      .catch(err => console.err('error fetching messages', err))
  }
}

export function postMessage(message, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/messages', message, {baseURL})
    .then(res => addMessageAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to post message"))
  }
}

/**
 * REDUCER
 */
export default function reducer(messages = [], action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    case ADD_MESSAGE:
      return [...messages, action.message]
    default:
      return messages
  }
}

//helperFunc
function addMessageAndRedirect(message, ownProps, dispatch) {
  dispatch(addMessage(message));
  ownProps.history.push('/messages');
}
