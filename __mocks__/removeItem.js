const deleteTask = (arr, index) => {
  const updatedTaskArray = [...arr];
  updatedTaskArray.splice(index, 1);
  return updatedTaskArray;
};

const deleteTask2 = (index) => {
  const TasksTest = JSON.parse(localStorage.getItem('TasksTest')) || [];
  const myList = document.querySelector('#sub-container');
  TasksTest.splice(index, 1);
  TasksTest.forEach((value, i) => {
    value.index = i + 1;
  });
  myList.innerHTML = '';
  localStorage.setItem('TasksTest', JSON.stringify(TasksTest));
};

export { deleteTask, deleteTask2 };
