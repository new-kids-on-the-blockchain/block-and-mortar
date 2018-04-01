import axios from "axios";

//ACTION TYPES
const ADD_MESSAGE = 'ADD_MESSAGE';
const GET_MESSAGES = 'GET_MESSAGES';

//ACTION CREATORS
const addMessage = message => ({type: ADD_MESSAGE, message})
const getMessages = messages => ({type: GET_MESSAGES, messages})

//THUNK CREATORS
export function fetchMessages(thread) {
  return function thunk(dispatch) {
    return axios.get('/api/messages', thread)
      .then(res => res.data)
      .then(messages => dispatch(getMessages(messages)))
      .catch(err => console.err('error fetching messages', err))
  }
}

export function postMessage(message, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/api/messages', message)
    .then(res => addMessageAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to post message"))
  }
}

//REDUCER
export default function reducer(messages = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, action.message];
    case GET_MESSAGES:
      return action.messages
    default:
      return messages
  }
}

//HELPER FUNCTIONS
function addMessageAndRedirect(message, ownProps, dispatch) {
  dispatch(addMessage(message));
  ownProps.history.push('/messages');
}
