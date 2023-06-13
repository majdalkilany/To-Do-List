const tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];

export const handleComplected = (event, task) => {
  if (!task.completed) {
    task.completed = true;

    tasks[task.index - 1] = task;
    console.log(tasks[task.index - 1]);
  } else {
    task.completed = false;

    tasks[task.index - 1] = task;
  }
  saveToLocaleStorage();
};

const saveToLocaleStorage = () => {
  localStorage.setItem('arrayOfTasks', JSON.stringify(tasks));
};
