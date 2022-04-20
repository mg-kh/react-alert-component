import * as type from './type'

export const initialState = {
  alerts: [],
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_ALERT:
      return {
        ...state,
        alerts: action.payload,
      }

    case type.HIDE_ALERT:
      return {
        ...state,
        alerts: action.payload,
      }

    default:
      return state
  }
}

export default Reducer

export const showAlert_r = (payload) => ({
  type: type.SHOW_ALERT,
  payload,
})

export const hideAlert_r = (payload) => ({
  type: type.HIDE_ALERT,
  payload,
})
