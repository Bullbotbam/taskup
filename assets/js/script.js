const formEl = document.querySelector('#task-form');
const tasksToDoEl = document.querySelector('#tasks-to-do');
const createTaskHandler = function (e) {
	e.preventDefault();
	let listItemEl = document.createElement('li');
	listItemEl.className = 'task-item';
	listItemEl.textContent = 'This is yet another task.';
	tasksToDoEl.appendChild(listItemEl);
};
formEl.addEventListener('submit', createTaskHandler);
