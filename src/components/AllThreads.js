import React, { Component } from 'react'
import { connect } from 'react-redux'
import SingleThread from './SingleThread'
import { fetchThreads, fetchCurrentUser, setCurrentThread } from '../store'

//Here, we're fetching all of the threads based on the current user
//on component mount
class AllThreads extends Component {
  componentDidMount(){
    window.scroll(0,0)
    this.props.fetchThreads()
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
                  //Here, we're setting our current thread to our store on click
                  <div key={thread.id} className="containerInner bt dim" onClick={() => this.props.setCurrentThread(thread)}>
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
          <SingleThread currentThread={this.props.currentThread} />
        </div>
      </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    threads: state.threads,
    currentThread: state.currentThread,
    currentUser: state.currentUser
  }
}

const mapDispatch = { fetchThreads, fetchCurrentUser, setCurrentThread }

export default connect(mapState, mapDispatch)(AllThreads)
