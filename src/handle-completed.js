const tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];

export const handleComplected = (event, task) => {
  if (!task.completed) {
    task.completed = true;
  } else {
    task.completed = false;
  }
  return task;
};

export const removeCompetedTasks = (tasks) => {
  const notCompletedTasks = tasks.filter((task) => !task.completed);
  return notCompletedTasks;
};
