import React from 'react'
import MacWindow from './windows/MacWindow'
import "./review.scss"

const Reviews = ({ windowName, windowState, setwindowsState }) => {
  return (
    <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState}>
      <div className='reviews'>
        <div className="comment-review">
          <h2>What a wonderful website, loved it!</h2>
          <p>- <span>Avanish Kumar Sharma</span></p>
        </div>

        <div className="comment-review">
          <h2>The design is clean and the animations are incredibly smooth.</h2>
          <p>- <span>Rahul Verma</span></p>
        </div>

        <div className="comment-review">
          <h2>Your portfolio looks very professional. Great job!</h2>
          <p>- <span>Priya Singh</span></p>
        </div>

        <div className="comment-review">
          <h2>Loved the macOS-inspired interface. It feels unique and modern.</h2>
          <p>- <span>Aman Gupta</span></p>
        </div>

        <div className="comment-review">
          <h2>Everything works perfectly. I had a wonderful browsing experience.</h2>
          <p>- <span>Sneha Patel</span></p>
        </div>

        <div className="comment-review">
          <h2>Excellent work! Your attention to detail really stands out.</h2>
          <p>- <span>Rohan Mishra</span></p>
        </div>

        <div className="comment-review">
          <h2>This is one of the best portfolio websites I've seen recently.</h2>
          <p>- <span>Anjali Sharma</span></p>
        </div>

        <div className="comment-review">
          <h2>The responsiveness and UI are absolutely fantastic.</h2>
          <p>- <span>Aditya Kumar</span></p>
        </div>

        <div className="comment-review">
          <h2>Very creative project. It showcases your frontend skills beautifully.</h2>
          <p>- <span>Neha Yadav</span></p>
        </div>

        <div className="comment-review">
          <h2>Keep building amazing projects like this. Best of luck!</h2>
          <p>- <span>Vivek Tiwari</span></p>
        </div>
      </div>
    </MacWindow>
  )
}

export default Reviews
