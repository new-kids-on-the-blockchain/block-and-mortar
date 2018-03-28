import React, { Component } from "react";
import AddMessage from "./AddMessage";
import { connect } from "react-redux";

class SingleThread extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps(newProps) {
    let newMessages = newProps.currentThread.messages;
    let sortedMessages;

    const sort = messages => {
      return messages.sort(function(a, b) {
        return new Date(a.updatedAt) - new Date(b.updatedAt);
      });
    };

    //checks for newly submitted messages
    if (newProps.messages.length) {
      //this grabs only the most recent message, in case someone submits
      //multiple messages without refreshing the page
      newMessages.push(newProps.messages[newProps.messages.length - 1]);
      sortedMessages = sort(newMessages);
      this.setState({ messages: sortedMessages });
    }
    console.log("Added a new message: ", newMessages);

    //this sorting function only runs if there are messages to sort
    //It returns all messages sorted by date
    if (newMessages.length !== this.state.messages.length) {
      sortedMessages = sort(newMessages);
      this.setState({ messages: sortedMessages });
    }
  }

  render() {
    console.log(this.props.currentThread, "CURRENT THREAD!!!!")
    console.log(this.props.currentUser, "CURRENT USER!!!!")
    console.log(this.state.messages, "MESSAGES!!!!")
    const currentThread = this.props.currentThread
    const buyerId = currentThread.buyerId
    const sellerId = currentThread.sellerId
    const messages = this.state.messages

    return (
      <div className="avenir">
        {!this.props.currentThread.id ? (
          <div>No Conversation Selected</div>
        ) : !this.state.messages.length ? (
          <div>
            <div>No Messages in this Conversation</div>
            <div>
              <AddMessage currentThread={this.props.currentThread} />
            </div>
          </div>
        ) : (
          <div>
            {this.state.messages && this.state.messages.map(message => {
              return (
                <div className="message" key={message.id}>
         
                <b>{message.senderId === this.props.currentThread.buyerId ? (<b>{this.props.currentThread.buyer.userName}: </b>) 
                
                  : (<b>{this.props.currentThread.seller.userName}: </b>)}</b>

                  {message.content}
                </div>
              );
            })}
            <div>
              <AddMessage currentThread={this.props.currentThread} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    messages: state.messages,
    currentUser: state.currentUser
  };
};

export default connect(mapState)(SingleThread);
