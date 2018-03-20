import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAgreements } from '../store';



class MyAgreements extends Component {

  componentDidMount(){
    console.log('All agreements rendering')
    this.props.handleFetchAgreements();
  }

  render(){
    console.log(this.props.agreements, "AGREEMENTS")
    return(
      <div>
      <ul>
      {this.props.agreements && this.props.agreements.map(agreement => {
        return (
          <li key={agreement.id}>
          {agreement.status}
          </li>
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
    agreements: state.agreements
  }
}

const mapDispatch = (dispatch) => {
    return {
        handleFetchAgreements() {
            dispatch(fetchAgreements())
        }
    }
}


export default connect(mapState, mapDispatch)(MyAgreements)
