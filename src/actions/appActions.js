import * as types from './action-types'

export const initialize = (data) => {
	console.log("initialze action", data)
  return {type: types.INITIALIZE, 'data': data}
}
