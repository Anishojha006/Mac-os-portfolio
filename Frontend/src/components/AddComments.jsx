import React, { useState } from 'react'
import MacWindow from './windows/MacWindow'
import "./AddComments.scss"
import SubmittedWindow from './SubmittedWindow';
import axios from 'axios';

const AddComments = ({ windowName, windowState, setwindowsState }) => {


  const [inputName, setinputName] = useState("");
  const [inputMessage, setinputMessage] = useState("");
  const [disable, setdisable] = useState(false);

  const nameHandler = (e) => {
    setinputName(e.target.value)
  }
  const messageHandler = (e) => {
    setinputMessage(e.target.value);
  }
  return (


    <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState} >
      <div className='comments-section'>
        <h1>🖐Hey! hope you liked the project 😉</h1>
        <h2>If you really enjoyed this experience. Consider leaving a comment!</h2>
        <h2>I would love to hear from you!</h2>
        <h3></h3>
        <form onSubmit={async (e) => {

          e.preventDefault();

          
            setwindowsState((previous) => (
              { ...previous, submit: !previous.submit }
            ))
            setwindowsState((previous) => (
              { ...previous, AddComments: !previous.AddComments }
            ))
            setdisable(true);
          try {
            const res = await axios.post("http://localhost:3000/api/createComment", {
              name: inputName,
              comment: inputMessage,
            });
          }
          catch (err) {
            console.log(err.message);
          }

        }}>
          <input required type="text" value={inputName} placeholder='Name' onChange={nameHandler} disabled={disable} />
          <input required type="text" value={inputMessage} placeholder='Message' onChange={messageHandler} disabled={disable}  />

          <button type='submit' disabled={disable}  >
            <span>Send</span>
          </button>
        </form>
      </div>

    </MacWindow>
  )
}

export default AddComments

