import React, { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Github from './components/windows/Github'
import Nav from './components/Nav'
import Note from './components/Note'
import Resume from './components/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import Folder from './components/folders/Folder.jsx'
import Liveprojects from './components/Liveprojects.jsx'
import Comments from './components/Comments.jsx'
const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    Liveprojects: false,
    Comments:false
  })

  return (
    <main>
      <Nav windowsState={windowsState} setwindowsState={setwindowsState} />
      <Folder folderstate={windowsState} setwindowsState={setwindowsState} />
      {windowsState.Liveprojects && <Liveprojects windowsState={windowsState} setwindowsState={setwindowsState} /> }
      <Dock windowsState={windowsState} setwindowsState={setwindowsState} />
      {windowsState.github && <Github windowName="github" windowState={windowsState} setwindowsState={setwindowsState} />}
      {windowsState.note && <Note windowName="note" windowState={windowsState} setwindowsState={setwindowsState} />}
      {windowsState.resume && <Resume windowName="resume" windowState={windowsState} setwindowsState={setwindowsState} />}
      {windowsState.spotify && <Spotify windowName="spotify" windowState={windowsState} setwindowsState={setwindowsState} />}
      {windowsState.cli && <Cli windowName="cli" windowState={windowsState} setwindowsState={setwindowsState} />}
      {windowsState.Comments && <Comments/>}
    </main>
  )
}

export default App