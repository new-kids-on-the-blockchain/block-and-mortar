import React, { Component } from "react";
import { connect } from "react-redux";
import { postService } from "../store";

class AddService extends Component {
  constructor() {
    super();
    this.state ={
      name: 'hi',
      description: 'hi',
      category: 'Misc',
      isAvailable: true,
      price: '1 eth',
      userId: '1'
    }
  }

  componentDidMount() {
    
  }

  handleChange = event => {
    const form = event.target.parentNode;
    this.setState({
      name: form.serviceName.value,
      category: form.serviceCategory.value,
      price: form.servicePrice.value,
      description: form.serviceDescription.value
    });
    console.log('HANDLE CHANGE', this.state)
  };

  handleSubmit() {}

  render() {
    const {name, description, category, isAvailable, price} = this.state
    console.log('CONTRACT HERE', this.props.contract)
    return (
      <div>
        <h2>CREATE A SERVICE</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="preview" />
          <h3> Name: </h3>
          <input value={name} name="serviceName" onChange={this.handleChange} />
          <h3> Category: </h3>
          <input
            value={category}
            name="serviceCategory"
            onChange={this.handleChange}
          />
          <h3> Price: </h3>
          <input value={price} name="servicePrice" onChange={this.handleChange} />
          <h3> Description: </h3>
          <input
            value={description}
            name="serviceDescription"
            onChange={this.handleChange}
          />
          <button> Submit </button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  contract: state.contract //redux
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addService: function(service) {
      dispatch(postService(service, ownProps))
    }
  }
}


export default connect(mapState, mapDispatch)(AddService)
