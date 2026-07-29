import React from 'react'
import MacWindow from './windows/MacWindow'
import "./review.scss"
import axios from 'axios'
import { useEffect, useState } from 'react'


const Reviews = ({ windowName, windowState, setwindowsState }) => {
  const [response, setresponse] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
   axios.get("http://localhost:3000/api/fetchcomments").then((res) => {
      setresponse(res.data.allComments);
    })
     .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  },[]
 )

  if (loading){
    return <MacWindow>
      <h1 className='loading'>Loading <span className='loader'></span> </h1>
    </MacWindow>
  }
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState}>
      <div className='reviews'>

        {response.map((comment)=>{
          return      <div className="comment-review">
          <h2>{comment.comment}</h2>
          <p>- <span>{comment.name}</span></p>
        </div>
        })}
    
      </div>
    </MacWindow>
  )
}

export default Reviews
