import './style.css';

const tasks = [
  {
    description: 'attend the first meeting ',
    completed: false,
    index: 0,
  },
  {
    description: 'start doing the first task ',
    completed: false,
    index: 1,
  },
  {
    description: 'submit the task ',
    completed: false,
    index: 2,
  },
];

const container = document.getElementById('container');
container.className = 'flex-container';

const header = document.createElement('div');
header.className = 'flex-row';
container.appendChild(header);

const form = document.createElement('form');
form.className = 'form';
container.appendChild(form);

const formInput = document.createElement('input');
formInput.className = 'flex-cell form-input';
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

const displayTask = tasks.forEach((task) => {
  const row = document.createElement('div');
  row.className = 'flex-row';
  container.appendChild(row);

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

const footer = document.createElement('div');
footer.className = 'flex-row footer-to-do';
container.appendChild(footer);
footer.textContent = 'Clear all complected';
