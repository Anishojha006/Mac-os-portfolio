import React from 'react'
import "./SubmittedWindow.scss"
import MacWindow from './windows/MacWindow'

const SubmittedWindow = (  {windowName, windowState, setwindowsState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState}>
         <div className='Submitted'>
        <h1>ThankYou for Your feedback</h1>
    </div>
    </MacWindow>

  )
}

export default SubmittedWindow