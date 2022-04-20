import uniqid from 'uniqid'
import { showAlert_r, hideAlert_r } from '@store/reducer.alert'

export const showAlert = (payload) => {
  return (dispatch, getState) => {
    payload.id = uniqid()
    const { alerts } = getState().alert
    dispatch(showAlert_r([...alerts, payload]))
    setTimeout(() => {
      hideAlert(payload.id)(dispatch, getState)
    }, payload.timeLimit * 1000)
  }
}

export const hideAlert = (id) => {
  return (dispatch, getState) => {
    const { alerts } = getState().alert
    const indexOfAlert = alerts.findIndex((alert) => alert.id === id)
    alerts.splice(indexOfAlert, 1)
    dispatch(hideAlert_r([...alerts]))
  }
}
