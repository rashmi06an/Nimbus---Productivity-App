import React from "react";
import "./Reports.css";

export default function Reports() {
  const dummyData = [
    { day: "Mon", tasks: 3, hours: 2 },
    { day: "Tue", tasks: 4, hours: 3 },
    { day: "Wed", tasks: 2, hours: 1 },
    { day: "Thu", tasks: 5, hours: 4 },
    { day: "Fri", tasks: 3, hours: 2 },
    { day: "Sat", tasks: 1, hours: 1 },
    { day: "Sun", tasks: 0, hours: 0 },
  ];

  return (
    <div className="reports-container">
      <h1 className="reports-heading">Weekly Productivity Summary</h1>
      <div className="chart-placeholder">
        <h2>Task vs Time Chart</h2>
        <div className="bar-chart">
          {dummyData.map((item, index) => (
            <div className="bar-group" key={index}>
              <div
                className="bar tasks-bar"
                style={{ height: `${item.tasks * 15}px` }}
                title={`Tasks: ${item.tasks}`}
              ></div>
              <div
                className="bar hours-bar"
                style={{ height: `${item.hours * 15}px` }}
                title={`Hours: ${item.hours}`}
              ></div>
              <p className="bar-label">{item.day}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}