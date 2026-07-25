import React, { useState } from "react";
import "./app.scss";

import { Routes, Route } from "react-router-dom";

import Dock from "./components/Dock";
import Github from "./components/windows/Github";
import Nav from "./components/Nav";
import Note from "./components/Note";
import Resume from "./components/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import Folder from "./components/folders/Folder";
import Liveprojects from "./components/Liveprojects";
import AddComments from "./components/AddComments";
import SubmittedWindow from "./components/SubmittedWindow";
import Reviews from "./components/Reviews";

const App = () => {
  const [windowsState, setwindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    Liveprojects: false,
    AddComments: false,
    submit:false,
    Reviews:false
  });

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <main>
            <Nav
              windowsState={windowsState}
              setwindowsState={setwindowsState}
            />

            <Folder
              folderstate={windowsState}
              setwindowsState={setwindowsState}
            />

            {windowsState.Liveprojects && (
              <Liveprojects
                windowsState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            <Dock
              windowsState={windowsState}
              setwindowsState={setwindowsState}
            />

            {windowsState.github && (
              <Github
                windowName="github"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            {windowsState.note && (
              <Note
                windowName="note"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            {windowsState.resume && (
              <Resume
                windowName="resume"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            {windowsState.spotify && (
              <Spotify
                windowName="spotify"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            {windowsState.cli && (
              <Cli
                windowName="cli"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            {windowsState.AddComments && (
              <AddComments
                windowName="AddComments"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              />
            )}

            {
              windowsState.submit &&  <SubmittedWindow  
                windowName="submit"
                windowState={windowsState}
                setwindowsState={setwindowsState}
              
              />
            }

            {windowsState.Reviews &&<Reviews
            
                  windowName="Reviews"
                windowState={windowsState}
                setwindowsState={setwindowsState}
            
            /> }
          </main>
        }
      />

      {/* Submit Page */}
    
      
     
    
    </Routes>
  );
};

export default App;