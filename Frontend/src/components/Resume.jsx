import React from 'react'
import MacWindow from './windows/MacWindow'
import "./resume.scss"

const Resume = ({windowName, windowState, setwindowsState}) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState}>
        <div className="resume-window">
            <embed src="/resume.pdf" frameBorder="0" ></embed>
        </div>
    </MacWindow>
  )
}

export default Resume