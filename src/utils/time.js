export const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
  
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };
  
  export const formatTimeDetailed = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const seconds = Math.floor((minutes % 1) * 60);
  
    if (hours > 0) {
      return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  
  export const getWeekDates = (date = new Date()) => {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
  
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
  
    return week;
  };
  
  export const isToday = (date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  export const isThisWeek = (date) => {
    const weekDates = getWeekDates();
    return weekDates.some(weekDate => weekDate.toDateString() === date.toDateString());
  };