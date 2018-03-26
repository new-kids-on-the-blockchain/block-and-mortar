import React from 'react'
import AddMessage from './AddMessage'

const SingleThread = (props) => {
  let messages = props.currentThread.messages
  console.log("current thread in single thread component: ", props.currentThread.id)
  return (
    <div className="avenir">
      {
        !props.currentThread.id
        ? <div>No Conversation Selected</div>
        : !messages.length
          ? <div>No Messages in this Conversation</div>
          : <div>
              {messages.map(message => {
              return <div className="message" key={message.id}>{message.content}</div>
              })}
              <div>
              <AddMessage currentThread={props.currentThread} />
              </div>
            </div>
      }
    </div>
  )
}

export default SingleThread
