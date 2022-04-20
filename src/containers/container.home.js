import { connect } from 'react-redux'

/**
 * Components
 */
import Home from '@pages/home'

/**
 * Actions
 */
import { showAlert, hideAlert } from '@store/action.alert'

export default connect(
  (state) => ({
    alerts: state.alert.alerts,
  }),
  (dispatch) => ({
    showAlert: (payload) => dispatch(showAlert(payload)),
    hideAlert: (id) => dispatch(hideAlert(id)),
  }),
)(Home)
