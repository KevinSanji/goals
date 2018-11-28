import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goals';
import completeGoals from './reducer_completed_goals';

export default combineReducers({
  user,
  goals,
  completeGoals
})

//Action creator logUser creates an action containing user email,
//action is read into reducer function, user object is created with email as key/value pair,
//user object is returned as global state, accessible by other components
