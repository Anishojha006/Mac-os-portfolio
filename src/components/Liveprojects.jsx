import React from 'react'
import "./liveprojects.scss"
import MacWindow from './windows/MacWindow'


const Liveprojects = ({ windowsState, setwindowsState }) => {

  return (

    <MacWindow windowName="Liveprojects" setwindowsState={setwindowsState}>
      <div className='liveprojects'>
        <div className="liveprojects-headings">
          <h2>Live Projects</h2>
          <p>This is the Live Projects section.</p>
        </div>
        <div className="projects-links">
          <a href="https://ui-of-landing-page-using-react-js.vercel.app/"  target='_blank'>Krate digital and motion studio</a>
          <a href="https://caffee-website-clone.vercel.app/"  target='_blank'>Coffee & Breakfast website UI</a>
          <a href="https://sundown-clone-ten.vercel.app/"  target='_blank'>Sundown website</a>
          <a href="https://flutter-website-fully-responsive-cl.vercel.app/"  target='_blank'>Flutter Clone</a>
          <a href="https://healing-and-wellness-website.vercel.app/"  target='_blank'>Helling and Wellness</a>
        </div>
      </div>
    </MacWindow>


  )
}

export default Liveprojects