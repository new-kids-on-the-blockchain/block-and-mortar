import React, { Component } from 'react';

class AddMessage extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }

  handleSubmit(evt){
    evt.preventDefault();
    const formData = {
      name: evt.target.serviceName.value
    }
  }

  render() {
    console.log()
    return (

    )
  }
}

const mapState = state => {
  return {
    currentUser: state.currentUser
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
