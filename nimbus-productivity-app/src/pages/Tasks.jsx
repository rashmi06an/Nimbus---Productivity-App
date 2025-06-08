import React, { useState } from "react";
import "./Page.css";


function Tasks() {
 const [taskInput, setTaskInput] = useState("");
 const [tasks, setTasks] = useState([]);


 const addTask = () => {
   if (taskInput.trim()) {
     setTasks([...tasks, { text: taskInput.trim(), done: false }]);
     setTaskInput("");
   }
 };


 const toggleDone = (index) => {
   const updatedTasks = [...tasks];
   updatedTasks[index].done = !updatedTasks[index].done;
   setTasks(updatedTasks);
 };


 const handleKeyDown = (e) => {
   if (e.key === "Enter") addTask();
 };


 return (
   <div className="page tasks">
     <h1>Task Manager</h1>
     <p className="page-subtitle">Stay on task, stay on track.</p>


     <div className="task-input-group">
       <input
         type="text"
         placeholder="Add a new task..."
         value={taskInput}
         onChange={(e) => setTaskInput(e.target.value)}
         onKeyDown={handleKeyDown}
       />
       <button className="primary_button" onClick={addTask}>
         Add Task
       </button>
     </div>


     <ul className="task-list">
       {tasks.map((task, index) => (
         <li key={index}>
           <input
             type="checkbox"
             checked={task.done}
             onChange={() => toggleDone(index)}
           />
           <span
             className="task-text"
             style={{
               textDecoration: task.done ? "line-through" : "none",
               color: task.done ? "gray" : "inherit",
             }}
           >
             {task.text}
           </span>
         </li>
       ))}
     </ul>
   </div>
 );
}


export default Tasks;