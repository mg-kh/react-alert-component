import React from 'react'

const AlertBox = (props) => {
  const bgColors = (type) => {
    switch (type) {
      case 'success':
        return 'success_alert'
      case 'error':
        return 'error_alert'
      case 'warning':
        return 'warning_alert'
      case 'info':
        return 'info_alert'
      default:
        return ''
    }
  }
  const { id, title, text, link, type } = props.payload
  const { hideAlert } = props

  return (
    <>
      <a href={link}>
        <div
          className={`${bgColors(
            type,
          )} p-2 rounded-md relative shadow-md w-64 md:w-96`}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              hideAlert(id)
            }}
            className="absolute right-1 top-1 border text-xs px-1 py-0.5 rounded-md"
          >
            Close
          </button>
          <h3 className="text-md">{title}</h3>
          <p className="text-xs">{text}</p>
        </div>
      </a>
    </>
  )
}

export default AlertBox
