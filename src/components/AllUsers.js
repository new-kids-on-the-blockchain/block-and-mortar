import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../store';



class AllUsers extends Component {

  componentDidMount(props){
    console.log('IN USERS COMPONENT')
    this.props.handleFetchUsers();
  }

  render(){
    console.log(this.props.users, "USERS")
    return(
      <div>
      <ul>
      {this.props.users && this.props.users.map(user => {
        return (
          <li key={user.id}>{user.email}</li>
        )
      })}
     </ul>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    users: state.users
  }
}

const mapDispatch = (dispatch) => {
    return {
        handleFetchUsers() {
            dispatch(fetchUsers()) 
        }
    }
}


export default connect(mapState, mapDispatch)(AllUsers)
