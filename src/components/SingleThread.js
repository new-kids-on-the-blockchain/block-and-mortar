import React, { Component } from 'react'
import AddMessage from './AddMessage'
import { connect } from 'react-redux'

class SingleThread extends Component {
  constructor(){
    super();

    this.state = {
      messages: []
    }
  }

  componentWillReceiveProps(newProps) {
    let newMessages = newProps.currentThread.messages
    let sortedMessages;

    const sort = (messages) => {
      return messages.sort(function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    }

    //checks for newly submitted messages
    if (newProps.messages.length) {
      //this grabs only the most recent message, in case someone submits
      //multiple messages without refreshing the page
      newMessages.push(newProps.messages[newProps.messages.length-1])
      sortedMessages = sort(newMessages)
      this.setState({ messages: sortedMessages })
    }

    //this sorting function only runs if there are messages to sort
    //It returns all messages sorted by date
    if (newMessages.length !== this.state.messages.length) {
      sortedMessages = sort(newMessages)
      this.setState({ messages: sortedMessages })
    }
  }

  render() {
    return (
      <div className="avenir">
        {
          !this.props.currentThread.id
            ? <div>No Conversation Selected</div>
            : !this.state.messages.length
              ? <div>
                <div>No Messages in this Conversation</div>
                <div>
                  <AddMessage currentThread={this.props.currentThread} />
                </div>
              </div>
              : <div>
                {this.state.messages.map(message => {
                  return <div className="message" key={message.id}>{message.content}</div>
                })}
                <div>
                  <AddMessage currentThread={this.props.currentThread} />
                </div>
              </div>
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapState)(SingleThread)
