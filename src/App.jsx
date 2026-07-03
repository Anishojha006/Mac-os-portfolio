import React from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Github from './components/windows/Github'
import Nav from './components/Nav'
import Note from './components/Note'
import Resume from './components/Resume'
import Spotify from './components/windows/Spotify'
const App = () => {
  return (
   <main>
    <Nav/>
    <Dock/> 
    <Github/>
    <Note/>
    <Resume/>
    <Spotify/>
   </main>
  )
}

export default App