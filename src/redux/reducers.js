/*
包含多个用于生成新的state的reducer函数的模块
 */
import {combineReducers} from 'redux'
const initXxx = 0;
function xxx(state = initXxx, action) { // number 数据
  switch (action.type){
    
    default:
      return state
  }
}

const initYyy = {};
function yyy(state = initYyy, action) { // {} 数据
  switch (action.type){
    
    default:
      return state
  }
}

// 合并多个reducer，生成一个新的reducer
// 返回的状态，是包含所有状态的对象：{xxx:0 yyy:{}}
export default combineReducers({
  xxx,
  yyy
})
