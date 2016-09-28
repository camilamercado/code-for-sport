import * as types from './action-types';

export const initialize = (data) => {
  return {
    types: types.INITIALIZE,
    data
  };
}
