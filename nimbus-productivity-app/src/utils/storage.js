const STORAGE_KEYS = {
  TASKS: "nimbus_tasks",
  POMODORO_SESSIONS: "nimbus_pomodoro_sessions",
};

export const storage = {
  getTasks: () => {
    const raw = localStorage.getItem(STORAGE_KEYS.TASKS);
    if (!raw) return [];

    const tasksByDate = JSON.parse(raw);
    const allTasks = Object.values(tasksByDate).flat();

    return allTasks.map((task) => ({
      ...task,
      createdAt: task.createdAt ? new Date(task.createdAt) : undefined,
      completedAt: task.completedAt ? new Date(task.completedAt) : undefined,
    }));
  },

  saveTasks: (tasksByDate) => {
    localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasksByDate));
  },

  getPomodoroSessions: () => {
    const raw = localStorage.getItem(STORAGE_KEYS.POMODORO_SESSIONS);
    if (!raw) return [];

    return JSON.parse(raw).map((session) => ({
      ...session,
      startTime: session.startTime ? new Date(session.startTime) : undefined,
      endTime: session.endTime ? new Date(session.endTime) : undefined,
    }));
  },

  savePomodoroSessions: (sessions) => {
    localStorage.setItem(
      STORAGE_KEYS.POMODORO_SESSIONS,
      JSON.stringify(sessions)
    );
  },
};