//合并所有reducers,并且返回
import { combineReducers } from 'redux'
import { player } from './player.redux'

export default combineReducers ({player})
