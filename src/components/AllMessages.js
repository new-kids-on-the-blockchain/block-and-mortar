import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleThread from './SingleThread'
import { fetchThreads } from '../store'

class AllMessages extends Component {
  constructor() {
    super();
    this.state = {
      threads: []
    }
  }

  componentDidMount(){
    this.props.fetchThreads()
  }

  render() {
    return (
      <div>
        <div class="allThreads">
          All Conversations
          {this.state.threads.map(thread => {
            return (
              <div class="singleThread">
                <div>Thread Topic: Service name goes here</div>
              </div>
            )
          })}
        </div>
        <SingleThread />
      </div>
    )
  }
}

const mapState = state => {
  return {
    threads: state.threads
  }
}

const mapDispatch = { fetchThreads }

export default connect(mapState, mapDispatch)(AllMessages)
