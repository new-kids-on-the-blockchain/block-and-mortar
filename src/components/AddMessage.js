import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postMessage } from '../store';

class AddMessage extends Component {
  constructor() {
    super();

    this.state = {
      messages: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({messages: this.props.currentThread.messages})
  }

  handleSubmit(evt){
    evt.preventDefault();

    let message = {
      content: evt.target.content.value,
      senderId: this.props.currentUser.id,
      threadId: this.props.currentThread.id
    }

    this.props.postNewMessage(message)
    document.getElementById("messageContent").value = "";
  }

  render() {
    return (
      <div className="avenir mw5 mw7-ns center bg-light-gray pa3 ph5-ns">
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
