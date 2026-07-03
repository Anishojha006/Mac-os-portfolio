import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import MacWindow from '../components/windows/MacWindow.jsx'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./note.scss"

const Note = () => {
  const [markdown, setMarkdown] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/note.txt')
      .then((res) => {
        if (!res.ok) throw new Error('Unable to load note')
        return res.text()
      })
      .then((text) => setMarkdown(text))
      .catch(() => setError('Unable to load notes'))
  }, [])

  return (
    <MacWindow>
      <div className="note-window">
          {error ? <p>{error}</p> : markdown ? <SyntaxHighlighter language="typescript" style={atelierDuneDark}>{markdown}  </SyntaxHighlighter>  : <p>Loading...</p>}
        
      </div>
    </MacWindow>
  )
}

export default Note