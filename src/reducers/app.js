import * as types from '../actions/action-types';
let initialState = {
	
	data : false,
	dataObj: [],
  currentPost: 1,
  activePost: {},
  pageType: "A"
}

export default function app (state = initialState, action){
  switch (action.type) {
    

    case types.INITIALIZE:
      return {...state, data : action.bool};
    
    case types.SETDATA:
       return {...state, dataObj : action.data};
    
    case types.SETACTIVEPOST:
       return {...state, activePost : action.data, currentPost : action.data.id};
    
    case types.SETCURRENTPOST:
       return {...state, currentPost : action.num};
    
    case types.SETPAGETYPE:
       return {...state, pageType : action.char};
    


    default:
      return state;
  }
};
