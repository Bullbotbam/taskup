const formEl = document.querySelector('#task-form');
const tasksToDoEl = document.querySelector('#tasks-to-do');
const createTaskHandler = function (e) {
	e.preventDefault();

	let taskNameInput = document.querySelector("input[name='task-name']").value;
	let taskTypeInput = document.querySelector("select[name='task-type']").value;

	// Create a list item
	let listItemEl = document.createElement('li');
	listItemEl.className = 'task-item';

	// Create a div to hold info and add to list item
	let taskInfoEl = document.createElement('div');
	// give it a class name
	taskInfoEl.className = 'task-info';
	// add HTML content to div
	taskInfoEl.innerHTML =
		"<h3 class='task-name'>" +
		taskNameInput +
		"</h3><span class='task-type'>" +
		taskTypeInput +
		'</span>';
	listItemEl.appendChild(taskInfoEl);

	// add entire list item to list
	tasksToDoEl.appendChild(listItemEl);

	console.dir(listItemEl);
};
formEl.addEventListener('submit', createTaskHandler);
