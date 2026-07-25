import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "60vh",
  windowName,
  setwindowsState,
}) => {
  const [windowDimension, setWindowDimension] = useState({
    width,
    height,
  });

  const [position, setPosition] = useState({
    x: (window.innerWidth - window.innerWidth * 0.4) / 2,
    y: (window.innerHeight - window.innerHeight * 0.6) / 2,
  });

  const sizeHandler = () => {
    if (windowDimension.width === width && windowDimension.height === height) {
      setWindowDimension({
        width: "100vw",
        height: "80vh",
      });

      setPosition({
        x: 0,
        y: 0,
      });
    } else {
      setWindowDimension({
        width,
        height,
      });

      setPosition({
        x: (window.innerWidth - window.innerWidth * 0.4) / 2,
        y: (window.innerHeight - window.innerHeight * 0.8) / 2,
      });
    }
  };

  return (
    <Rnd
      size={{
        width: windowDimension.width,
        height: windowDimension.height,
      }}
      position={position}
      onDragStop={(e, d) => {
        setPosition({
          x: d.x,
          y: d.y,
        });
      }}
      onResizeStop={(e, direction, ref, delta, newPosition) => {
        setWindowDimension({
          width: ref.style.width,
          height: ref.style.height,
        });

        setPosition(newPosition);
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            {/* Close Button */}
            <div
              className="dot red"
              onClick={() => {
                if (setwindowsState && windowName) {
                  setwindowsState((prev) => ({
                    ...prev,
                    [windowName]: false,
                  }));
                }
              }}
            ></div>

            {/* Maximize / Restore Button */}
            <div className="dot yellow" onClick={sizeHandler}></div>

            {/* Green Button */}
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>anishojha - zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
