import { SIGNED_IN, SET_GOALS } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  // note: always return action in action creator
  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}
