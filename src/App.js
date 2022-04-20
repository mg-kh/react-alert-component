import React from 'react'
import { connect } from 'react-redux'
/**
 * Components
 */
import Home from '@containers/container.home'
import Alert from '@components/common/alert'
import AlertBox from '@components/common/alert/alertbox'

/**
 * Actions
 */
import { showAlert, hideAlert } from '@store/action.alert'

function App({ alerts, hideAlert }) {
  return (
    <div className="App">
      <Alert>
        {alerts.length > 0 &&
          alerts.map((alertData, i) => (
            <React.Fragment key={i}>
              <AlertBox payload={alertData} hideAlert={hideAlert} />
            </React.Fragment>
          ))}
      </Alert>
      <Home />
    </div>
  )
}

export default connect(
  (state) => ({
    alerts: state.alert.alerts,
  }),
  (dispatch) => ({
    showAlert: (payload) => dispatch(showAlert(payload)),
    hideAlert: (id) => dispatch(hideAlert(id)),
  }),
)(App)
