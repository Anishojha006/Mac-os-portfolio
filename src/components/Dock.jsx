import React from 'react'
import "./dock.scss"
const Dock = ({ windowsState, setwindowsState }) => {
    return (
        <footer className='dock'>
            <div className="icon github"
                onClick={() => {
                    setwindowsState((previous) => (
                        { ...previous, github: !previous.github }
                    ))
                }}>
                <img src="/doc-icons/github.svg" alt=""
                />
            </div>
            <div className="icon note" onClick={() => {
                setwindowsState((previous) => ({
                    ...previous, note: !previous.note
                }))
            }}>
                <img src="/doc-icons/note.svg" alt="" />
            </div>
            <div className="icon pdf" onClick={() => {
                setwindowsState((previous) => ({
                    ...previous, resume: !previous.resume
                }))
            }}>
                <img src="/doc-icons/pdf.svg" alt="" />
            </div>

            <div className="icon calender">
                <img src="/doc-icons/calender.svg" alt="" />
            </div>

            <div className="icon spotify" onClick={() => {
                setwindowsState((previous) => ({
                    ...previous, spotify: !previous.spotify
                }))
            }}>
                <img src="/doc-icons/spotify.svg" alt="" />
            </div>
            <div className="icon mail">
                <img src="/doc-icons/mail.svg" alt="" />
            </div>

            <div className="icon link">
                <img src="/doc-icons/link.svg" alt="" />
            </div>
            <div className="icon cli" onClick={() => {
                setwindowsState((previous) => ({
                    ...previous, cli: !previous.cli
                }))
            }}>
                <img src="/doc-icons/cli.svg" alt="" />
            </div>

        </footer>


    )
}

export default Dock 