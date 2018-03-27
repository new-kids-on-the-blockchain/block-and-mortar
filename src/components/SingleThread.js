import React from 'react'
import AddMessage from './AddMessage'

const SingleThread = (props) => {
  let messages = props.currentThread.messages
  let sortedMessages;

  //this sorting function only runs if there are messages to sort
  //It returns all messages sorted by date
  if (messages){
    sortedMessages = messages.sort(function (a, b) {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });
  }

  return (
    <div className="avenir">
      {
        !props.currentThread.id
        ? <div>No Conversation Selected</div>
        : !sortedMessages.length
            ? <div>
                <div>No Messages in this Conversation</div>
                <div>
                  <AddMessage currentThread={props.currentThread} />
                </div>
              </div>
          : <div>
              {sortedMessages.map(message => {
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
