const buttonEl = window.document.querySelector('#save-task');
const tasksToDoEl = document.querySelector('#tasks-to-do');
const createTaskHandler = function (e) {
	e.preventDefault();
	let listItemEl = document.createElement('li');
	listItemEl.className = 'task-item';
	listItemEl.textContent = 'This is yet another task.';
	tasksToDoEl.appendChild(listItemEl);
};
buttonEl.addEventListener('click', createTaskHandler);
