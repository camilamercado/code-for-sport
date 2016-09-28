import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.INITIALIZE:
      return [...state];
    default:
      return state;
  }
};
