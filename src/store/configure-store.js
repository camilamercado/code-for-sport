import rootReducer from '../reducers';
import {createStore} from 'redux';
//const initialState = window.__INITIAL_STATE__


export default (initialState) => {
  return createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
};
