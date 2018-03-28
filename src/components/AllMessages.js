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
      <div className="home" id="background">
      <div className="avenir mw10 center bg-light-gray pa3 ph5-ns" id="topMarginLogin">
        <div className="allThreads">
          <h2>All Conversations</h2>
          { this.props.threads.length
            ? this.props.threads.map(thread => {
                return (
                  <div key={thread.id} className="containerInner bt" onClick={() => this.setCurrentThread(thread)}>
                    <div>{thread.service.name}</div>
                    {
                      thread.buyer.id === this.props.currentUser.id
                      ? <div>{thread.seller.userName}</div>
                      : <div>{thread.buyer.userName}</div>
                    }
                  </div>
                )
              })
            : <div>No Conversations Currently Exist</div>
          }
        </div>
        <div className="currentThread">
          <SingleThread currentThread={this.state.currentThread} />
        </div>
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
