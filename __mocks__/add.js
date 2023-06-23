export const createTaskArray = (arr, task) => {
  const updatedTaskArr = [...arr];
  updatedTaskArr.push(task);
  return updatedTaskArr;
};

const tasks = [];

function Task(description, taskIndex) {
  this.description = description;
  this.completed = false;
  this.index = taskIndex;
}
console.log(localStorage);
export const createTask = () => {
  const taskDescription = document.getElementById('input-description');
  const descriptionValue = taskDescription.value;
  const subContainer = document.getElementById('sub-container');
  const taskIndex = tasks.length;
  const task = new Task(descriptionValue, taskIndex);
  tasks.push(task);
  saveToLocaleStorage();

  taskDescription.value = '';
  subContainer.innerHTML += `
    <li class="flex-row draggable" data-index="${taskIndex}" draggable="true">
      <div class="flex-cell">
        <span class="check-mark" id="check-mark">✔</span>
        <button class="check-btn"></button>
      </div>
      <div class="flex-cell">${descriptionValue}</div>
      <textarea class="flex-cell hidden">${descriptionValue}</textarea>
      <div class="flex-cell">
        <div class="vertical-dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </li>
  `;
  return task;
};

export const saveToLocaleStorage = () => {
  localStorage.setItem('teatArray', JSON.stringify(tasks));
};

export const getFromLocalStorage = () => {
  if (localStorage.getItem('arrayOfTasks')) {
    const newTasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
    for (let i = 0; i < newTasks.length; i++) {
      tasks.push(newTasks[i]);
    }
  }
};
