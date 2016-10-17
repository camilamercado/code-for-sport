import rootReducer from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
//const initialState = window.__INITIAL_STATE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default (initialState) => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)), initialState);
};
