import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {

  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <div>
          <h3>Goals Tracker</h3>
          <AddGoal />
          <hr/>
          <h4>Goals</h4>
          <GoalList />
          <hr/>
          <h4>Complete Goals</h4>
          <CompleteGoalList />
          <hr/>
        </div>
        <button
          className='btn btn-danger'
          onClick={() => this.signOut()}
          >
            Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // this logs initial state, is called again as state is updated from other components
  return {}
}

export default connect(mapStateToProps, null)(App);
