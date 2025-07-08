const STORAGE_KEYS = {
    TASKS: 'nimbus_tasks',
    POMODORO_SESSIONS: 'nimbus_pomodoro_sessions',
  };
  
  export const storage = {
    // Get tasks from localStorage
    getTasks: () => {
      const raw = localStorage.getItem(STORAGE_KEYS.TASKS);
      if (!raw) return [];
  
      return JSON.parse(raw).map((task) => ({
        ...task,
        createdAt: new Date(task.createdAt),
        completedAt: task.completedAt ? new Date(task.completedAt) : undefined,
      }));
    },
  
    // Save tasks to localStorage
    saveTasks: (tasks) => {
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
    },
  
    // Get pomodoro sessions from localStorage
    getPomodoroSessions: () => {
      const raw = localStorage.getItem(STORAGE_KEYS.POMODORO_SESSIONS);
      if (!raw) return [];
  
      return JSON.parse(raw).map((session) => ({
        ...session,
        startTime: new Date(session.startTime),
        endTime: session.endTime ? new Date(session.endTime) : undefined,
      }));
    },
  
    // Save pomodoro sessions to localStorage
    savePomodoroSessions: (sessions) => {
      localStorage.setItem(STORAGE_KEYS.POMODORO_SESSIONS, JSON.stringify(sessions));
    },
  };