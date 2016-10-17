import * as types from './action-types'

export const initialize = (bool) => {
  return {type: types.INITIALIZE, 'bool': bool}
}


export const postData = (posts) =>{
	return {type: types.SETDATA, 'data': posts}

}

export const setActivePost = (post) =>{
	return {type: types.SETACTIVEPOST, 'data': post}
}

export const setCurrentPost = (num) =>{
	console.log("setting post", num)
	return {type: types.SETCURRENTPOST, 'num': num}
}

export const setPageType = (char) =>{
	return {type: types.SETPAGETYPE, 'char': char}
}