import React from 'react'

const SingleThread = (props) => {
  console.log("current thread in Single Thread: ", props.currentThread)
  let messages = props.currentThread.messages
  return (
    <div>
      {
        !props.currentThread.id
        ? <div>No Conversation Selected</div>
        : !messages.length
          ? <div>No Messages in this Conversation</div>
          : messages.map(message => {
            return <div key={message.id}>{message.content}</div>
          })
      }
    </div>
  )
}

export default SingleThread
