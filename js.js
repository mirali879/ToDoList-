const form = document.querySelector('#to-do-form');
const toDoInput = document.querySelector('#to-do-form input[type="text"]');
console.log(toDoInput);
const toDoList = document.querySelector('#to-do-list');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (toDoInput.value !== '') {
		const toDo = document.createElement('li');
		toDo.innerText = toDoInput.value;
		toDoList.appendChild(toDo);
		toDoInput.value = '';
		addDeleteButton(toDo);
	}
});

function addDeleteButton(toDo) {
	const deleteButton = document.createElement('button');
	deleteButton.innerText = 'X';
	deleteButton.classList.add('delete');
	toDo.appendChild(deleteButton);
	deleteButton.addEventListener('click', function(event) {
		toDo.remove();
	});
}

const searchInput = document.querySelector('#search-input');
searchInput.addEventListener('keyup', function(event) {
	const searchValue = event.target.value.toLowerCase();
	const allToDos = toDoList.getElementsByTagName('li');
	for (let i = 0; i < allToDos.length; i++) {
		const toDoText = allToDos[i].textContent.toLowerCase();
		if (toDoText.includes(searchValue)) {
			allToDos[i].style.display = 'block';
		} else {
			allToDos[i].style.display = 'none';
		}
	}
});
