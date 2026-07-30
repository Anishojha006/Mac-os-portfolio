// Clock.jsx
import React, { useEffect, useState } from "react";
import "./AnalogClock.scss"; 

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const date = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();

  const hDeg = h * 30 + m * (360 / 720);
  const mDeg = m * 6 + s * (360 / 3600);
  const sDeg = s * 6;

  const formattedDate = `${date}/${month < 10 ? "0" + month : month}/${year}`;
  const day = weekday[time.getDay()];

  // Generate dial lines
  const dialLines = [];
  for (let i = 1; i < 60; i++) {
    dialLines.push(
      <div
        key={i}
        className="diallines"
        style={{ transform: `rotate(${6 * i}deg)` }}
      ></div>
    );
  }

  return (
    <div className="clock">
      <div>
        <div className="info date">{formattedDate}</div>
        <div className="info day">{day}</div>
      </div>

      <div className="dot"></div>

      <div>
        <div
          className="hour-hand"
          style={{ transform: `rotate(${hDeg}deg)` }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${mDeg}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotate(${sDeg}deg)` }}
        ></div>
      </div>

      <div>
        <span className="h3">3</span>
        <span className="h6">6</span>
        <span className="h9">9</span>
        <span className="h12">12</span>
      </div>

      {dialLines}
    </div>
  );
};

export default AnalogClock;
