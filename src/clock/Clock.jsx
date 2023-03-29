import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import "./clock.css"

function AnalogClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="analog-clock">
      
      <Clock
        value={time}
        size={70}
        renderHourMarks={true}
        renderMinuteMarks={true}
        style={{color:"white"}}
      />
    </div>
  );
}

export default AnalogClock;
