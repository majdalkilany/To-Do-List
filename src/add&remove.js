/* eslint-disable comma-dangle */
let tasks = [];

// const tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];

function Task(description, taskIndex) {
  this.description = description;
  this.completed = false;
  this.index = taskIndex;
}
export const createTask = () => {
  getFromLocalStorage();
  const taskDescription = document.getElementById('input-description');
  const descriptionValue = taskDescription.value;
  const taskIndex = tasks.length + 1;
  const task = new Task(descriptionValue, taskIndex);
  tasks.push(task);
  saveToLocaleStorage();
  tasks = [];
  taskDescription.value = '';
};

const saveToLocaleStorage = () => {
  localStorage.setItem('arrayOfTasks', JSON.stringify(tasks));
};
// saveToLocaleStorage();

const getFromLocalStorage = () => {
  if (localStorage.getItem('arrayOfTasks')) {
    const newTasks = JSON.parse(localStorage.getItem('arrayOfTasks'));
    for (let i = 0; i < newTasks.length; i++) {
      tasks.push(newTasks[i]);
    }
  }
};

export const editHandler = (event) => {
  tasks = [];
  getFromLocalStorage();
  localStorage.setItem('arrayOfTasks', JSON.stringify([]));
  console.log('tasks array', tasks);

  const foundTask = tasks.find(
    (task) => task.description === event.target.value
  );
  console.log('from remove func', foundTask);
  event.target.addEventListener('blur', () => {
    tasks.forEach((task) => {
      if (foundTask.index === task.index) {
        task.description = event.target.value;
      }
    });
    tasks = tasks.filter((task) => {
      if (task.description.replace(/\s/g, '') === '') {
        const { parentElement } = event.target;
        parentElement.remove();
        return false;
      }
      return true;
    });
    localStorage.setItem('arrayOfTasks', JSON.stringify(tasks));
  });
};

// const removeHandler = (event) => {
//   tasks = [];
//   getFromLocalStorage();
//   localStorage.setItem('arrayOfTasks', JSON.stringify([]));
//   console.log('tasks array', tasks);
// };
