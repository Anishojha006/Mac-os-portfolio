import React from 'react'
import "./folder.scss"

const folder = ({ windowsState, setwindowsState }) => {
  return (
    <div className='folder'>
        <div className='folder-continer'
         onClick={() => {
                    setwindowsState((previous) => (
                        { ...previous, Liveprojects: !previous.Liveprojects }
                    ))
                }}
        >
         <img src="public/archive_3804719.png" />
           <h3>Projects</h3>
        </div>

         <div className='folder-continer' 
            onClick={() => {
                    setwindowsState((previous) => (
                        { ...previous, AddComments: !previous.AddComments }
                    ))
                }}
         >
         <img src="public/archive_3804719.png" />
           <h3>Add Comments</h3>
        </div>

         <div className='folder-continer'>
         <img src="public/archive_3804719.png" />
           <h3>Reviews</h3>
        </div>
    </div>
  )
}

export default folder