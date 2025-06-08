import React, { useState, useEffect, useRef } from "react";
import "./Page.css";


function Timer() {
 const [seconds, setSeconds] = useState("");
 const [timeLeft, setTimeLeft] = useState(0);
 const [isRunning, setIsRunning] = useState(false);
 const alarmSound = useRef(null);


 useEffect(() => {
   let interval;
   if (isRunning && timeLeft > 0) {
     interval = setInterval(() => {
       setTimeLeft((t) => t - 1);
     }, 1000);
   } else if (timeLeft === 0 && isRunning) {
     setIsRunning(false);
     if (alarmSound.current) alarmSound.current.play();
   }


   return () => clearInterval(interval);
 }, [isRunning, timeLeft]);


 const startTimer = () => {
   const num = parseInt(seconds);
   if (num > 0) {
     setTimeLeft(num);
     setIsRunning(true);
     setSeconds("");
   }
 };


 const stopTimer = () => {
   setIsRunning(false);
   setTimeLeft(0);
 };


 const formatTime = (t) => {
   const m = Math.floor(t / 60)
     .toString()
     .padStart(2, "0");
   const s = (t % 60).toString().padStart(2, "0");
   return `${m}:${s}`;
 };


 return (
   <div className="page notes timer-page">
     <h1 className="timer-title">Timer</h1>
     <p className="timer-subtitle">Set the timer to manage your work.</p>


     <div className="timer-input-group">
       <input
         type="number"
         min="1"
         placeholder="Seconds"
         value={seconds}
         onChange={(e) => setSeconds(e.target.value)}
         className="timer-input"
       />
       <button className="primary_button timer-start-btn" onClick={startTimer}>
         Start
       </button>
       <button className="primary_button timer-stop-btn" onClick={stopTimer}>
         Stop
       </button>
     </div>


     <h2 className={`timer-display ${timeLeft === 0 ? "time-up" : ""}`}>
       {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
     </h2>


     <audio ref={alarmSound} src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" />
   </div>
 );
}


export default Timer;