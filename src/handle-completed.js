export const handleComplected = (event, task) => {
  const tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
  console.log(tasks);
  console.log('from handle complete');
  for (let i = 0; i < tasks.length; i++) {
    console.log(+task);
    if (+task === tasks[i].index) {
      if (!tasks[i].completed) {
        tasks[i].completed = true;
      } else {
        tasks[i].completed = false;
      }
    }
    localStorage.setItem('arrayOfTasks', JSON.stringify(tasks));
  }

  return task;
};

export const removeCompetedTasks = (tasks) => {
  const notCompletedTasks = tasks.filter((task) => !task.completed);
  return notCompletedTasks;
};
