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
      <div className="avenir bg-light-gray pv3">
        <form onSubmit={this.handleSubmit}>
          <label for="messageContent" className="avenir f6 b db mb2">New Message</label>
          <textarea
            id="messageContent"
            name="content"
            type="text"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
          />
          <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-pink">Submit</button>
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
