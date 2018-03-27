import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postMessage } from '../store';

class AddMessage extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt){
    let message = {
      content: evt.target.content.value,
      senderId: this.props.currentUser.id,
      threadId: this.props.currentThread.id
    }

    evt.preventDefault();
    this.props.postNewMessage(message)
    document.getElementById("messageContent").value = "";
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps: ", nextProps)
  }

  render() {
    return (
      <div>
        <h2>New Message:</h2>
        <form onSubmit={this.handleSubmit}>
          <textarea
            id="messageContent"
            name="content"
            type="text"
          />
          <button>Submit</button>
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
