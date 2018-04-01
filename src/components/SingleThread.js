import React, { Component } from "react";
import AddMessage from "./AddMessage";
import { connect } from "react-redux";

class SingleThread extends Component {
  constructor(){
    super();

    this.state = {
      newMessages: []
    }

    this.sort = this.sort.bind(this)
  }

  //sort messages by timestamp
  sort = messages => {
    return messages.sort(function (a, b) {
      return new Date(a.updatedAt) - new Date(b.updatedAt);
    });
  };

  componentWillReceiveProps(newProps){
    this.setState({newMessages: newProps.messages})
  }

  render() {
    let thread = this.props.currentThread
    let messages = this.props.currentThread.messages
    let sortedMessages;

    if (messages){
      if (this.state.newMessages) {
        console.log("new messages: ", this.state.newMessages)
        messages.push(this.state.newMessages[this.state.newMessages.length - 1])
      }
      sortedMessages = this.sort(messages);
    }

    return (
      <div className="avenir ph4 fl w-60 bl h-100 msgBox">
        {!thread.id ? (
          <div className="f3">No Conversation Selected</div>
        ) : !sortedMessages ? (
          <div>
            <div className="f3">No Messages in this Conversation</div>
            <div>
              <AddMessage currentThread={thread} />
            </div>
          </div>
        ) : (
          <div className="pa3">
            <div className="f3">Selected Conversation</div>
            {sortedMessages && sortedMessages.map(message => {
              return (
                <div className="message pa2" key={message.id}>
                  <span className="pa3">{message.senderId === thread.buyerId
                    ? (<span className="b">{thread.buyer.userName}: </span>)
                    : (<span className="b">{thread.seller.userName}: </span>)}
                  </span>
                  {message.content}
                </div>
              );
            })}
            <div>
              <AddMessage currentThread={thread} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    currentThread: state.currentThread,
    messages: state.messages
  };
};

export default connect(mapState)(SingleThread);
