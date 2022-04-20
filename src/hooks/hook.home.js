const useHook = ({
  alerts,
  /**
   * Actions
   */
  showAlert,
  hideAlert,
}) => {
  return [alerts, showAlert, hideAlert]
}

export default useHook
