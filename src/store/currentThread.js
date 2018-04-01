//ACTION TYPES
const UPDATE_CURRENT_THREAD = 'UPDATE_CURRENT_THREAD';

//ACTION CREATORS
const updateCurrentThread = currentThread => ({ type: UPDATE_CURRENT_THREAD, currentThread })

//THUNK CREATORS
export function setCurrentThread(currentThread) {
  return function thunk(dispatch) {
      dispatch(updateCurrentThread(currentThread))
  }
}

//REDUCER
export default function reducer(currentThread = {}, action) {
  switch (action.type) {
    case UPDATE_CURRENT_THREAD:
      return action.currentThread;
    default:
      return currentThread
  }
}
