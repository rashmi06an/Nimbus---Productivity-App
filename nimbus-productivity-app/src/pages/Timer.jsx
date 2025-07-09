import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';
import { storage } from '../utils/storage';
import { formatTimeDetailed } from '../utils/time'; // Accepts seconds
import './timer.css';

const WORK_DURATION = 25 * 60;

function TimerPage() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [currentSession, setCurrentSession] = useState(null);

  useEffect(() => {
    setTasks(storage.getTasks());
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && currentSession) {
      handleSessionComplete();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleSessionComplete = () => {
    setIsRunning(false);

    const finished = {
      ...currentSession,
      endTime: new Date(),
      duration: WORK_DURATION / 60,
      completed: true,
    };

    const sessions = storage.getPomodoroSessions();
    storage.savePomodoroSessions([...sessions, finished]);

    if (selectedTask) {
      const updatedTasks = tasks.map(t =>
        t.id === selectedTask.id
          ? { ...t, timeSpent: t.timeSpent + WORK_DURATION / 60 }
          : t
      );
      setTasks(updatedTasks);
      storage.saveTasks(updatedTasks);
    }

    setTimeLeft(WORK_DURATION);
    setCurrentSession(null);
  };

  const startTimer = () => {
    setIsRunning(true);
    if (!currentSession) {
      setCurrentSession({
        id: Date.now().toString(),
        taskId: selectedTask?.id,
        startTime: new Date(),
        duration: 0,
        type: 'work',
        completed: false,
      });
    }
  };

  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(WORK_DURATION);
    setCurrentSession(null);
  };

  return (
    <div className="white-decor">
    <div className='timer'>
      <div className="pomodoro-container">
        {/* Header */}
        <h1 className="time-tracker-title">Time Tracker</h1>

        {/* Main Box */}
        <div className="pomodoro-box">
          <h2 className="pomodoro-title">Pomodoro Timer</h2>

          {/* Timer inside circle */}
          <div className="timer-circle-wrapper">
            <div className="timer-circle">
              <div className="timer-display">{formatTimeDetailed(timeLeft)}</div>
            </div>
          </div>

          <p className="timer-phase">Work</p>

          {/* Buttons */}
          <div className="timer-buttons">
            <button onClick={isRunning ? pauseTimer : startTimer} className="timer-button">
              {isRunning ? <Pause size={32} /> : <Play size={32} />}
              <span>{isRunning ? 'Pause' : 'Start'}</span>
            </button>
            <button onClick={resetTimer} className="timer-button">
              <RotateCcw size={32} />
              <span>Reset</span>
            </button>
          </div>
        </div>
        <div className="break-suggestion">
  <h4>Need a Break?</h4>
  <p>Take a 5-minute walk or stretch!</p>
</div>


<div className="bottom-row">
  <div className="focus-checklist">
    <h3>Focus Checklist</h3>
    <ul>
      <li><CheckCircle className="check-icon" size={16} />Remove distractions</li>
      <li><CheckCircle className="check-icon" size={16} />Set your task goal</li>
      <li><CheckCircle className="check-icon" size={16} />Start the timer with intention</li>
    </ul>
  </div>

  <div className="quick-tips">
    <h3>Quick Tips</h3>
    <ul>
    <li><CheckCircle className="check-icon" size={16} /> Notifications off</li>
    <li><CheckCircle className="check-icon" size={16} /> Phone away</li>
    <li><CheckCircle className="check-icon" size={16} /> Headphones on</li>
  
    </ul>
  </div>
</div>

      </div>
    </div>
    </div>
  );
}

export default TimerPage;
