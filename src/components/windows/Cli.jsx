import React from 'react'
import MacWindow from "./MacWindow";
import TerminalModule from 'react-console-emulator'
import "./cli.scss"

const Terminal = TerminalModule.default || TerminalModule

const commands = {
    about: {
        description: 'Learn about me',
        usage: 'about',
        fn: () => 'Hi! I\'m Anish Ojha, a full-stack developer passionate about building modern web applications. Welcome to my portfolio!'
    },
    projects: {
        description: 'View my projects',
        usage: 'projects',
        fn: () => 'Scheds - Course Schedule Generator | FinTrack - Finance Dashboard | Portfolio - Personal Website'
    },
    skills: {
        description: 'List my technical skills',
        usage: 'skills',
        fn: () => 'React, TypeScript, Node.js, ASP.NET Core, C#, JavaScript, SQL, MongoDB, Docker, AWS'
    },
    contact: {
        description: 'Get my contact information',
        usage: 'contact',
        fn: () => 'Email: anish@example.com | Phone: +1 (555) 123-4567'
    },
    resume: {
        description: 'View my resume',
        usage: 'resume',
        fn: () => 'Resume: https://anishjha.dev/resume.pdf'
    },
    github: {
        description: 'Visit my GitHub',
        usage: 'github',
        fn: () => 'GitHub: https://github.com/anishojha'
    },
    email: {
        description: 'Send me an email',
        usage: 'email',
        fn: () => 'Email: hello@anishjha.dev'
    },
    echo: {
        description: 'Echo text back to terminal',
        usage: 'echo [text]',
        fn: (...args) => args.join(' ')
    }
}

const welcomeMsg = `
╔════════════════════════════════════════════════╗
║     Welcome to Anish Ojha's Portfolio CLI      ║
╚════════════════════════════════════════════════╝

Available commands:
  about      - Learn about me
  projects   - View my projects
  skills     - List my technical skills
  contact    - Get my contact information
  resume     - View my resume
  github     - Visit my GitHub
  email      - Send me an email
  echo       - Echo text back to terminal
  help       - Show this help message

Type a command and press Enter to execute.
`

const Cli = ({windowName, windowState, setwindowsState}) => {
    return (
        <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMsg}
                    promptLabel={'anishojha:~$'}
                    promptLabelStyle={{color:'#00ff00'}}
                />
            </div>
        </MacWindow>
    )
}

export default Cli