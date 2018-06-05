const list = document.querySelector('#items');

let addItem = document.querySelector('#shopping-list').addEventListener('submit', function(event) {
	event.preventDefault();

	let line = document.createElement('li');
	let inputValue = event.target.querySelector('#input').value;
	let newLine = document.createTextNode(inputValue);

  line.appendChild(newLine);
	list.appendChild(line);
	let removeButton = document.createElement('button');
	let textOfTheButton = document.createTextNode('Remove');

	removeButton.appendChild(textOfTheButton);
	line.appendChild(removeButton);

	removeButton.addEventListener('click', function(event) {
		event.preventDefault();

		let itemRemove = event.target.parentNode;
		list.removeChild(itemRemove);
	});
});
