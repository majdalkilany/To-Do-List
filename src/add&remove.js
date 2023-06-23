let tasks = [];

function Task(description, taskIndex) {
  this.description = description;
  this.completed = false;
  this.index = taskIndex;
}
export const createTask = () => {
  tasks = [];

  getFromLocalStorage();
  tasks.forEach((task) => {
    task.index = tasks.indexOf(task);
  });
  const taskDescription = document.getElementById('input-description');
  const descriptionValue = taskDescription.value;
  const taskIndex = tasks.length;
  const task = new Task(descriptionValue, taskIndex);
  tasks.push(task);
  saveToLocaleStorage();
  tasks = [];
  taskDescription.value = '';
};

export const saveToLocaleStorage = () => {
  localStorage.setItem('arrayOfTasks', JSON.stringify(tasks));
};

export const getFromLocalStorage = () => {
  if (localStorage.getItem('arrayOfTasks')) {
    const newTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
    for (let i = 0; i < newTasks.length; i++) {
      tasks.push(newTasks[i]);
    }
  }
};

export const editHandler = (event) => {
  tasks = [];
  getFromLocalStorage();
  console.log('tasks array', tasks);

  const foundTask = tasks.find(
    (task) => task.description === event.target.value
  );
  if (foundTask) {
    event.target.addEventListener('blur', () => {
      tasks.forEach((task) => {
        if (foundTask.index === task.index) {
          task.description = event.target.value;
        }
      });
      tasks = tasks.filter((task) => {
        if (task.description.replace(/\s/g, '') === '') {
          const { parentElement } = event.target;
          task.index = tasks.indexOf(task);
          parentElement.remove();
          return false;
        }
        return true;
      });
      tasks.forEach((task) => {
        task.index = tasks.indexOf(task);
      });
      localStorage.setItem('arrayOfTasks', JSON.stringify(tasks));
    });
  }
};
