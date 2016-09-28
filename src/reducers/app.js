import * as types from '../actions/action-types';
let initialState = {data : false}

export default function app (state = initialState, action){
  switch (action.type) {
    case types.INITIALIZE:
      console.log("reducing!", action)
      return {...state, data : action.data};
    default:
      return state;
  }
};
