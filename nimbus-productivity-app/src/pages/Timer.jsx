import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, Clock } from 'lucide-react';
import { storage } from '../utils/storage';
import { formatTimeDetailed } from '../utils/time';

const WORK_DURATION = 25 * 60; // 25 minutes

function TimerPage() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(WORK_DURATION);
  const [currentSession, setCurrentSession] = useState(null);

  useEffect(() => {
    setTasks(storage.getTasks());
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && currentSession) {
      handleSessionComplete();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleSessionComplete = () => {
    setIsRunning(false);

    const finishedSession = {
      ...currentSession,
      endTime: new Date(),
      duration: WORK_DURATION / 60,
      completed: true,
    };

    const sessions = storage.getPomodoroSessions();
    storage.savePomodoroSessions([...sessions, finishedSession]);

    if (selectedTask) {
      const updatedTasks = tasks.map(task =>
        task.id === selectedTask.id
          ? { ...task, timeSpent: task.timeSpent + WORK_DURATION / 60 }
          : task
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
      const newSession = {
        id: Date.now().toString(),
        taskId: selectedTask?.id,
        startTime: new Date(),
        duration: 0,
        type: 'work',
        completed: false,
      };
      setCurrentSession(newSession);
    }
  };

  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(WORK_DURATION);
    setCurrentSession(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Pomodoro Timer</h1>
        <p className="text-gray-600 mb-8 text-base">Focus for 25 minutes on your task</p>

        {/* Timer Display */}
        <div className="mb-6">
          <div className="text-6xl font-mono text-gray-800 mb-2">
            {formatTimeDetailed(timeLeft / 60)}
          </div>
          <p className="text-sm text-gray-500">Work Session</p>
        </div>

        {/* Timer Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={isRunning ? pauseTimer : startTimer}
            className={`px-6 py-3 rounded-lg font-semibold text-white shadow-lg transition-transform transform hover:-translate-y-1 ${
              isRunning
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isRunning ? <Pause className="inline w-5 h-5 mr-2" /> : <Play className="inline w-5 h-5 mr-2" />}
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <RotateCcw className="inline w-5 h-5 mr-2" />
            Reset
          </button>
        </div>

        {/* Task Selector */}
        <div className="text-left">
          <h2 className="text-lg font-semibold mb-3 text-gray-800">Select a Task (optional)</h2>
          <div className="grid gap-3">
            {/* No Task Option */}
            <div
              onClick={() => setSelectedTask(null)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md ${
                !selectedTask ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium text-gray-800">General Session</div>
                  <div className="text-sm text-gray-500">No specific task</div>
                </div>
              </div>
            </div>

            {/* Task Options */}
            {tasks.slice(0, 4).map((task) => (
              <div
                key={task.id}
                onClick={() => setSelectedTask(task)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-md ${
                  selectedTask?.id === task.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 mt-1 text-blue-500" />
                  <div>
                    <div className="font-medium text-gray-800">{task.title}</div>
                    <div className="text-sm text-gray-500">{task.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerPage;