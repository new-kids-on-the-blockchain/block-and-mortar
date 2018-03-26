import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleThread from './SingleThread'
import { fetchThreads, fetchCurrentUser } from '../store'

class AllMessages extends Component {
  constructor(){
    super();
    this.state = {
      currentThread: {}
    }

    this.setCurrentThread = this.setCurrentThread.bind(this);
  }

  componentDidMount(){
    this.props.fetchThreads()
  }

  setCurrentThread(thread){
    this.setState({currentThread: thread})
  }

  render() {
    return (
      <div>
        <div className="allThreads">
          <h2>All Conversations</h2>
          {this.props.threads.map(thread => {
            return (
              <div key={thread.id} className="singleThread" onClick={() => this.setCurrentThread(thread)}>
                <div>{thread.service.name}</div>
                {
                  thread.buyer.id === this.props.currentUser.id
                  ? <div>{thread.seller.userName}</div>
                  : <div>{thread.buyer.userName}</div>
                }
              </div>
            )
          })}
        </div>
        <div className="currentThread">
          <SingleThread currentThread={this.state.currentThread} />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    threads: state.threads,
    currentUser: state.currentUser
  }
}

const mapDispatch = { fetchThreads, fetchCurrentUser }

export default connect(mapState, mapDispatch)(AllMessages)
