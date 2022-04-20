import React from 'react'
import ReactDOM from 'react-dom'
// const alertRoot = ReactDOM.createRoot(document.getElementById('alert-root'))

const Alert = ({ children }) => {
  return ReactDOM.createPortal(
    <>
      <div className="fixed right-0 gap-1 grid p-1">{children}</div>
    </>,
    document.getElementById('alert-root'),
  )
}

export default Alert
