import { createTask, createTaskArray } from '../__mocks__/add.js';
import { deleteTask, deleteTask2 } from '../__mocks__/removeItem.js';

describe('Add task', () => {
  localStorage.clear();
  const tasks = [
    { completed: false, description: 'majd', index: 0 },
    { completed: false, description: 'majd', index: 1 },
    { completed: false, description: 'majd', index: 2 },
  ];
  const task = {
    completed: false,
    description: 'majd',
    index: 3,
  };

  beforeEach(() => {
    document.body.innerHTML = `
      <form class="form">
        <input class="flex-cell form-input" id="input-description" placeholder="Add to your list" value="majd" required="">
      </form>
      <ul id="sub-container">
        <li class="flex-row draggable" data-index="0" draggable="true">
          <div class="flex-cell">
            <span class="check-mark" id="check-mark">✔</span>
            <button class="check-btn"></button>
          </div>
          <div class="flex-cell">study</div>
          <textarea class="flex-cell  hidden">study</textarea>
          <div class="flex-cell">
            <div class="vertical-dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </li>
      </ul>
    `;
  });
  test('check if it saved render to the dom ', () => {
    createTask();
    console.log(localStorage.getItem('arrayOfTasks'));
    const list = document.querySelectorAll('.draggable');
    expect(list).toHaveLength(2);
  });

  test('Add one new task to the tasks array', () => {
    const updatedArray = createTaskArray(tasks, task);
    expect(updatedArray).toHaveLength(4);
    expect(updatedArray[3]).toEqual(task);
  });

  test('Add one new task to the local storage', () => {
    createTask();
    expect(JSON.parse(localStorage.getItem('teatArray'))).toHaveLength(2);
  });
});

describe('deleteTask', () => {
  const arr = [
    {
      description: 'cleaning',
      completed: false,
      index: 1,
    },
    {
      description: 'reading',
      completed: false,
      index: 2,
    },
  ];

  test('The function will delete task from an array', () => {
    const updatedTaskArray = deleteTask(arr, 1);
    expect(updatedTaskArray).toHaveLength(1);
    expect(updatedTaskArray).not.toContain(arr[1]);
  });
  test('Removing an item from DOM', () => {
    document.body.innerHTML = `
      <form class="form">
        <input class="flex-cell form-input" id="input-description" placeholder="Add to your list" value="majd" required="">
      </form>
      <ul id="sub-container">
        <li class="flex-row draggable" data-index="0" draggable="true">
          <div class="flex-cell">
            <span class="check-mark" id="check-mark">:heavy_check_mark:</span>
            <button class="check-btn"></button>
          </div>
          <div class="flex-cell">study</div>
          <textarea class="flex-cell  hidden">study</textarea>
          <div class="flex-cell">
            <div class="vertical-dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>
        </li>
      </ul>
    `;
    deleteTask2(1);
    const myList = document.querySelector('#sub-container');
    expect(myList.children).toHaveLength(0);
  });
});
