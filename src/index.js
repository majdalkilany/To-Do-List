import './style.css';

import { createTask, editHandler } from './add&remove.js';

let tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
console.log('tasks ', tasks);

const displayListHead = () => {
  const container = document.getElementById('container');
  container.className = 'flex-container';

  const header = document.createElement('div');
  header.className = 'flex-row';
  container.appendChild(header);

  const form = document.createElement('form');
  form.className = 'form';
  container.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const subContainer = document.getElementById('sub-container');
    subContainer.remove();
    console.log('sub', subContainer);
    tasks = [];
    createTask();
    displayAllTasks();
    displayFooter();
  });
  const formInput = document.createElement('input');
  formInput.className = 'flex-cell form-input';
  formInput.id = 'input-description';
  form.appendChild(formInput);
  formInput.placeholder = 'Add to your list';
  // checkCellHeader.textContent = "Today's To Do";

  const checkCellHeader = document.createElement('div');
  checkCellHeader.className = 'flex-cell';
  header.appendChild(checkCellHeader);
  checkCellHeader.textContent = "Today's To Do";

  const recycleCellHeader = document.createElement('div');
  recycleCellHeader.className = 'flex-cell';
  header.appendChild(recycleCellHeader);

  const recycleIcon = document.createElement('i');
  recycleIcon.className = 'fas fa-recycle';
  recycleCellHeader.appendChild(recycleIcon);
};

const displayAllTasks = () => {
  tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
  console.log(tasks);
  const subContainer = document.createElement('div');
  subContainer.id = 'sub-container';
  container.appendChild(subContainer);
  const displayTask = tasks.forEach((task) => {
    const row = document.createElement('div');
    row.className = 'flex-row';
    subContainer.appendChild(row);

    const checkCell = document.createElement('div');
    checkCell.className = 'flex-cell';
    row.appendChild(checkCell);

    const checkMark = document.createElement('span');
    checkMark.className = 'check-mark';
    checkMark.innerHTML = '&#10004;';
    checkCell.appendChild(checkMark);

    const checkBtn = document.createElement('button');
    checkBtn.className = 'check-btn';
    checkCell.appendChild(checkBtn);

    let checkMarkToggle = false;

    checkBtn.onclick = function (event) {
      event.stopPropagation();
      checkMark.style.display = checkMarkToggle ? 'none' : 'block';
      checkBtn.style.display = checkMarkToggle ? 'block' : 'none';
      checkMarkToggle = !checkMarkToggle;
    };

    checkMark.onclick = function (event) {
      event.stopPropagation();
      checkMark.style.display = checkMarkToggle ? 'none' : 'block';
      checkBtn.style.display = checkMarkToggle ? 'block' : 'none';
      checkMarkToggle = !checkMarkToggle;
    };

    const labelCell = document.createElement('div');
    labelCell.className = 'flex-cell';
    row.appendChild(labelCell);
    labelCell.textContent = task.description;
    labelCell.addEventListener('click', toggleCell);

    const textAreaCell = document.createElement('textarea');
    textAreaCell.className = 'flex-cell  hidden';
    row.appendChild(textAreaCell);
    textAreaCell.textContent = task.description;
    textAreaCell.addEventListener('blur', (event) => {
      toggleCell();
    });
    textAreaCell.addEventListener('change', (event) => {
      textAreaCell.textContent = event.target.value;
      labelCell.textContent = event.target.value;
    });

    textAreaCell.addEventListener('focus', (event) => {
      textAreaCell.textContent = event.target.value;
      labelCell.textContent = event.target.value;
      editHandler(event);
    });
    function toggleCell() {
      labelCell.classList.toggle('hidden');
      textAreaCell.classList.toggle('hidden');

      if (!textAreaCell.classList.contains('hidden')) {
        textAreaCell.focus();
      }
    }

    const dotsCell = document.createElement('div');
    dotsCell.className = 'flex-cell';
    row.appendChild(dotsCell);

    const dotsDiv = document.createElement('div');
    dotsDiv.className = 'vertical-dots';
    dotsCell.appendChild(dotsDiv);

    for (let index = 0; index <= 2; index++) {
      const dotDiv = document.createElement('div');
      dotDiv.className = 'dot';
      dotsDiv.appendChild(dotDiv);
    }
  });
};
const displayFooter = () => {
  const subContainer = document.getElementById('sub-container');

  const footer = document.createElement('div');
  footer.className = 'flex-row footer-to-do';
  subContainer.appendChild(footer);
  footer.textContent = 'Clear all complected';
};

document.addEventListener('DOMContentLoaded', () => {
  displayListHead();
  displayAllTasks();
  displayFooter();
});
