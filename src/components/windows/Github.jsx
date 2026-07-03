import React from 'react'
import MacWindow from './MacWindow'
import githubData from "../../assets/github.json"
import "./github.scss"
const Gitcard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {data.tags.map((tag, index) => {
                return <p key={`tag-${index}`} className='tag'>{tag}</p>
            })}
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository</a>
            {data.demoLink && <a href={data.demoLink}>Demo link</a>}
        </div>
    </div>
}
const Github = ({ windowName, windowState, setwindowsState }) => {
    return (
        <MacWindow windowName={windowName} windowState={windowState} setwindowsState={setwindowsState} >
            <div className="cards">
                {githubData.map((project) =>{
                    return <Gitcard key={project.id} data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default Github