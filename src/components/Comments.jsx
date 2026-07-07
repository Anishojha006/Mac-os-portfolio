import React from 'react'
import MacWindow from './windows/MacWindow'
import "./comments.scss"

const Comments = () => {
  return (
    <MacWindow>
        <div className='comments-section'>
            <h1>🖐Hey! hope you liked the project 😉</h1>
            <h2>If you really enjoyed this experience. Consider leaving a comment!</h2>
            <h2>I would love to hear from you!</h2>
            <h3></h3>
            <input type="text" placeholder='Name' />
            <input type="text"  placeholder='Message'/>

            <button>
              <span>Send</span>
            </button>
        </div>

    </MacWindow>
  )
}

export default Comments