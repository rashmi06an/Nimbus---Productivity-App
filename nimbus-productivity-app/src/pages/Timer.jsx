import React, { useState, useEffect, useRef } from 'react';
import './timer.css';

function TimerPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(25); // in minutes
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [customInput, setCustomInput] = useState(duration);

  const intervalRef = useRef(null);

  const beep = useRef(new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"));

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            beep.current.play(); // 🔊 Beep sound
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Handle custom duration input
  const handleDurationChange = () => {
    if (customInput > 0) {
      setDuration(customInput);
      setTimeLeft(customInput * 60);
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimeLeft(duration * 60);
  };

  return (
    <div className="timer">
      <div className="pomodoro-container">
        <h1 className="time-tracker-title">Time Tracker</h1>

        <div className="pomodoro-box">
          <h2 className="pomodoro-title">Pomodoro Timer</h2>

          <div className="custom-time-input">
            <input
              type="number"
              min="1"
              value={customInput}
              onChange={(e) => setCustomInput(Number(e.target.value))}
              placeholder="Set duration (min)"
            />
            <button onClick={handleDurationChange}>Set</button>
          </div>

          <div className="timer-circle-wrapper">
            <div className="timer-circle">
              <div className="timer-display">{formatTime(timeLeft)}</div>
            </div>
          </div>

          <p className="timer-phase">Work</p>

          <div className="timer-buttons">
            <button className="timer-button" onClick={handleStartPause}>
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button className="timer-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerPage;
