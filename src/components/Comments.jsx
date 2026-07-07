import React from 'react'
import MacWindow from './windows/MacWindow'

const Comments = () => {
  return (
    <MacWindow>
        <div>
            <h1>Give Yopur valuable feedback</h1>
            <input type="text" placeholder='Name' />
            <input type="text"  placeholder='Message'/>

            <button>Send</button>
        </div>

    </MacWindow>
  )
}

export default Comments