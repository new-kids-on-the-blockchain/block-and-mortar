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
    window.scroll(0,0)
    this.props.fetchThreads()
  }

  setCurrentThread(thread){
    this.setState({currentThread: thread})
  }

  render() {
    return (
      <div className="home pa2 fl w-100" id="background">
      <div className="avenir bg-light-gray pv2 ph4 fl w-100" id="topMargin2">
          <div className="allThreads ph4 fl w-40">
          <div className="f2">All Conversations</div>
          { this.props.threads.length
            ? this.props.threads.map(thread => {
                return (
                  <div key={thread.id} className="containerInner bt dim" onClick={() => this.setCurrentThread(thread)}>
                    <div><span className="b">Topic:</span> {thread.service.name}</div>
                    {
                      thread.buyer.id === this.props.currentUser.id
                        ? <div><span className="b">To:</span> {thread.seller.userName}</div>
                      : <div><span className="b">From:</span> {thread.buyer.userName}</div>
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
