import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postMessage } from '../store';

class AddMessage extends Component {
  constructor() {
    super();
    this.state = {
      sender: "",
      recipient: "",
      subject: "",
      message: "",
      threadId: 0
    }
  }

  handleSubmit(evt){
    //we'll have to check if a thread exists
    //if it doesn't exist, create the thread
      //then add message to thread
    //if it does exist, add message to thread
    evt.preventDefault();

    const formData = {
      subject: evt.target.subject.value
    }
  }

  render() {
    console.log()
    return (
      <div>
        <h2>Send New Message</h2>
        <form>
          <h3>Subject</h3>
          <input
            name="subject"
            type="text"
          />
          <h3>Message</h3>
          <textarea
            name="message"
            type="text"
          />
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    currentUser: state.currentUser,
    messages: state.messages
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    postNewMessage: function(message) {
      dispatch(postMessage(message, ownProps))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(AddMessage))
