import React, { useState, useEffect, useRef } from 'react';
import './timer.css';

const WORK_DURATION = 25 * 60; // 25 minutes

function TimerPage() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

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
    setTimeLeft(WORK_DURATION);
  };

  return (
    <div className="timer">
      <div className="pomodoro-container">
        <h1 className="time-tracker-title">Time Tracker</h1>

        <div className="pomodoro-box">
          <h2 className="pomodoro-title">Pomodoro Timer</h2>

          <div className="timer-circle-wrapper">
            <div className="timer-circle">
              <div className="timer-display">{formatTime(timeLeft)}</div>
            </div>
          </div>

          <p className="timer-phase">Work</p>

          <div className="timer-buttons">
            <button className="timer-button" onClick={handleStartPause}>
              <span>{isRunning ? 'Pause' : 'Start'}</span>
            </button>
            <button className="timer-button" onClick={handleReset}>
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerPage;
