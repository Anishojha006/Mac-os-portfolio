import React from 'react';
import "./nav.scss";
import DateTime from './DateTime';

const Nav = ({  setwindowsState }) => {
    return (
        <nav>
            <div className="left">
                <div className="apple-icon">
                    <img src="./navbar-icon/apple.svg" alt="" />
                </div>
                <div className="nav-item"  onClick={() => {
                setwindowsState((previous) => ({
                    ...previous, cli: !previous.cli
                }))
            }} >
                    <p>Anish Ojha</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item"  onClick={()=>{
              window.open("https://github.com/Anishojha006", "_blank");

             }}>
                    <p>Github</p>
                </div>
                <div className="nav-item" 
                onClick={() => {
                setwindowsState((previous) => ({
                    ...previous, cli: !previous.cli
                }))
            }}
                >
                    <p>Terminal</p>
                </div>
            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="./navbar-icon/wifi.svg" alt="" />
                </div>
                     <div className="nav-item">
                    <DateTime/>
                </div>
            </div>
        </nav>
    )
}

export default Nav