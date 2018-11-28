import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    const { title } = this.state;
    // this is accessing local state
    const { email } = this.props.user;
    // this is accessing global state from App.js as props, and then declaring object with the key 'email:' set to the value of this.props.user
    goalRef.push({email, title});
  }

  render() {
    return(
      <div className='form-inline'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Add a goal'
            className='form-control'
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />
          <button
            className='btn btn-success'
            type='button'
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  // this is setting the 'user' key to the user value of the global state object
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddGoal);
