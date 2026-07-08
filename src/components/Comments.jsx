import React, { useState } from 'react'
import MacWindow from './windows/MacWindow'
import "./comments.scss"

const Comments = () => {
  
  const [inputName, setinputName] = useState("");
  const [inputMessage, setinputMessage] = useState("");

  const nameHandler =(e)=>{
    setinputName(e.target.value)
  }
  const messageHandler =(e)=>{
  setinputMessage(e.target.value);
  }
  return (
    <MacWindow>
        <div className='comments-section'>
            <h1>🖐Hey! hope you liked the project 😉</h1>
            <h2>If you really enjoyed this experience. Consider leaving a comment!</h2>
            <h2>I would love to hear from you!</h2>
            <h3></h3>
            <input type="text" value={inputName} placeholder='Name' onChange={nameHandler} />
            <input type="text" value={inputMessage}  placeholder='Message' onChange={messageHandler}/>

            <button>
              <span>Send</span>
            </button>
        </div>

    </MacWindow>
  )
}

export default Comments