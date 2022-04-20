import { combineReducers } from 'redux'

/**
 * Reducers
 */
import alertReducer from '@store/reducer.alert'

export default combineReducers({
  alert: alertReducer,
})
