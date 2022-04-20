/* eslint-disable no-unused-vars */
import React from 'react'

/**
 * Hook
 */
import useHook from '@hooks/hook.home'

const Home = (props) => {
  const [
    alerts,
    /**
     * Action
     */
    showAlert,
    hideAlert,
  ] = useHook(props)

  return (
    <>
      <section>
        <div className="container ">
          <div className="min-h-screen w-full flex items-center justify-center">
            <div className="flex gap-2">
              <button
                onClick={() =>
                  showAlert({
                    title: 'Success',
                    text:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
                    timeLimit: 3,
                    type: 'success',
                  })
                }
                className="base_button bg-green-500 hover:bg-green-400 active:bg-green-600"
              >
                Show Success Alert
              </button>
              <button
                onClick={() =>
                  showAlert({
                    title: 'Error',
                    text:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
                    timeLimit: 3,
                    link: 'https://www.google.com/',
                    type: 'error',
                  })
                }
                className="base_button bg-red-500 hover:bg-red-400 active:bg-red-600"
              >
                Show Error Alert
              </button>
              <button
                onClick={() =>
                  showAlert({
                    text:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
                    timeLimit: 7,
                    link: 'https://www.google.com/',
                    type: 'warning',
                  })
                }
                className="base_button bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600"
              >
                Show Warning Alert
              </button>
              <button
                onClick={() =>
                  showAlert({
                    title: 'Info',
                    text:
                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, praesentium.',
                    timeLimit: 5,
                    link: 'https://www.google.com/',
                    type: 'info',
                  })
                }
                className="base_button bg-blue-500 hover:bg-blue-400 active:bg-blue-600"
              >
                Show info Alert
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
