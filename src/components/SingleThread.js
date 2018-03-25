import React, { Component } from 'react'
import { connect } from 'react-redux'

//necessary functions need to be imported from store

class SingleThread extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
       This is a single thread
      </div>
    )
  }
}

const mapState = state => {
  return {
    state: state
  }
}

export default connect(mapState)(SingleThread)
