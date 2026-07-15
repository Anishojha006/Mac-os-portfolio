import React from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";

import TerminalModule from "react-console-emulator";

// Support both CommonJS and ES Module exports
const Terminal = TerminalModule.default || TerminalModule;

const terminalCommands = {
  about: {
    description: "Learn more about me.",
    usage: "about",
    fn: () =>
      `👋 Hello! I'm Anish Ojha.

I'm a Full-Stack Web Developer passionate about building modern web applications.

Type "projects" to explore my work.`,
  },

  projects: {
    description: "View my projects.",
    usage: "projects",
    fn: () =>
      `🚀 Featured Projects

• Portfolio Website
• Spotify Clone
• CRUD API
• Hospital Landing Page
• Course Schedule Generator`,
  },

  skills: {
    description: "View my skills.",
    usage: "skills",
    fn: () =>
      `💻 Skills

Frontend
• HTML
• CSS / SCSS
• JavaScript
• React

Backend
• Node.js
• Express.js

Database
• MongoDB
• Mongoose

Tools
• Git
• GitHub
• Vercel`,
  },

  github: {
    description: "GitHub profile",
    usage: "github",
    fn: () => "https://github.com/your-github",
  },

  linkedin: {
    description: "LinkedIn profile",
    usage: "linkedin",
    fn: () => "https://linkedin.com/in/your-linkedin",
  },

  contact: {
    description: "Contact details",
    usage: "contact",
    fn: () =>
      `📧 Email : your@email.com

🌐 GitHub : https://github.com/your-github

💼 LinkedIn : https://linkedin.com/in/your-linkedin`,
  },

  resume: {
    description: "Resume",
    usage: "resume",
    fn: () => "https://yourwebsite.com/resume.pdf",
  },

  echo: {
    description: "Print text",
    usage: "echo hello",
    fn: (...args) => args.join(" "),
  },
};

const welcomeMessage = `
=========================================

Welcome to Anish Ojha's Portfolio Terminal

=========================================

Available Commands

about
projects
skills
github
linkedin
resume
contact
echo
help
clear

Type any command and press Enter.
`;

const CLI = ({ windowName, windowState, setwindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowsState={setwindowsState}
    >
      <div className="cli-window">
        <Terminal
          commands={terminalCommands}
          welcomeMessage={welcomeMessage}
          promptLabel="anish@portfolio:~$"
          promptLabelStyle={{
            color: "#3b82f6",
            fontWeight: "bold",
          }}
          autoFocus
        />
      </div>
    </MacWindow>
  );
};

export default CLI;