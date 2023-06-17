const tasks = JSON.parse(localStorage.getItem('arrayOfTasks')) || [];
let dragStartIndex;
let startDraggableItem;
let newTasksArray = [];

function dragStart(draggable) {
  draggable.classList.add('dragging');
  dragStartIndex = +draggable.closest('li').getAttribute('data-index');
  startDraggableItem = draggable;
}
const dragEnd = (draggable) => {
  draggable.classList.remove('dragging');
  draggable.classList.remove('over');
};

function dragDrop(draggable) {
  swapItems(startDraggableItem, draggable);

  draggable.classList.remove('over');
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

const dragOver = function (e) {
  e.preventDefault();
};

function swapItems(fromItem, toItem) {
  const draggablesContainer = document.getElementById('sub-container');

  dragStartIndex = +fromItem.closest('li').getAttribute('data-index');
  const dragSecondIndex = +toItem.closest('li').getAttribute('data-index');
  console.log(dragStartIndex, dragSecondIndex);

  // console.log(tasks);
  // console.log(newTasksArray);
  draggablesContainer.insertBefore(fromItem, toItem.nextSibling);
  const draggables = document.getElementsByClassName('draggable');

  for (let i = 0; i < draggables.length; i++) {
    const { value } = draggables[i].childNodes[2];
    const draggedTask = {
      description: value,
      completed: false,
      index: i,
    };
    newTasksArray.push(draggedTask);
  }
  localStorage.setItem('arrayOfTasks', JSON.stringify(newTasksArray));
  newTasksArray = [];
}
export const addEventListeners = () => {
  const draggables = document.querySelectorAll('.draggable');
  const draggablesContainer = document.getElementById('sub-container');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      dragStart(draggable);
    });
    draggable.addEventListener('dragend', () => {
      dragEnd(draggable);
    });
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
    draggable.addEventListener('drop', () => {
      dragDrop(draggable);
    });
  });

  draggablesContainer.addEventListener('dragover', dragOver);
};
