window.addEventListener('load', () => {
	const form = document.querySelector("#form");
	const input = document.querySelector("#input");
	const input2 = document.querySelector("#input2");
	const input3 = document.querySelector("#input3");
	const input4 = document.querySelector("#input4");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		const task2 = input2.value;
		const task3 = input3.value;
		const task4 = input4.value;
		
	  const task_el = document.createElement('div');
	  task_el.classList.add('task');
      task_el.classList.add('task2');
      task_el.classList.add('task3');
      task_el.classList.add('task4');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

	  const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

      const task_input_el2 = document.createElement('input');
		task_input_el2.classList.add('text');
		task_input_el2.type = 'text';
		task_input_el2.value = task2;
		task_input_el2.setAttribute('readonly', 'readonly');

      const task_input_el3 = document.createElement('input');
		task_input_el3.classList.add('text');
		task_input_el3.type = 'text';
		task_input_el3.value = task3;
		task_input_el3.setAttribute('readonly', 'readonly');

      const task_input_el4 = document.createElement('input');
		task_input_el4.classList.add('text');
		task_input_el4.type = 'text';
		task_input_el4.value = task4;
		task_input_el4.setAttribute('readonly', 'readonly');

	  task_content_el.appendChild(task_input_el);
      task_content_el.appendChild(task_input_el2);
      task_content_el.appendChild(task_input_el3);
      task_content_el.appendChild(task_input_el4);

	  const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

      const task_actions_el2 = document.createElement('div');
		task_actions_el2.classList.add('actions');

      const task_actions_el3 = document.createElement('div');
		task_actions_el3.classList.add('actions');

      const task_actions_el4 = document.createElement('div');
		task_actions_el4.classList.add('actions');
		
	  const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Name Edit';

      const task_edit_el2 = document.createElement('button');
		task_edit_el2.classList.add('edit');
		task_edit_el2.innerText = 'Surname Edit';

      const task_edit_el3 = document.createElement('button');
		task_edit_el3.classList.add('edit');
		task_edit_el3.innerText = 'Number Edit';

      const task_edit_el4 = document.createElement('button');
		task_edit_el4.classList.add('edit');
		task_edit_el4.innerText = 'Country Edit';

	  const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'All Delete';



		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_edit_el2);
		task_actions_el.appendChild(task_edit_el3);
		task_actions_el.appendChild(task_edit_el4);
        task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);
		task_el.appendChild(task_actions_el2);
		task_el.appendChild(task_actions_el3);
		task_el.appendChild(task_actions_el4);

		list_el.appendChild(task_el);

	  input.value = '';
      input2.value = '';
      input3.value = '';
      input4.value = '';

	  task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

      task_edit_el2.addEventListener('click', (b) => {
			if (task_edit_el2.innerText.toLowerCase() == "edit") {
				task_edit_el2.innerText = "Save";
				task_input_el2.removeAttribute("readonly");
				task_input_el2.focus();
			} else {
				task_edit_el2.innerText = "Edit";
				task_input_el2.setAttribute("readonly", "readonly");
			}
		});

      task_edit_el3.addEventListener('click', (x) => {
			if (task_edit_el3.innerText.toLowerCase() == "edit") {
				task_edit_el3.innerText = "Save";
				task_input_el3.removeAttribute("readonly");
				task_input_el3.focus();
			} else {
				task_edit_el3.innerText = "Edit";
				task_input_el3.setAttribute("readonly", "readonly");
			}
		});

      task_edit_el4.addEventListener('click', (y) => {
			if (task_edit_el4.innerText.toLowerCase() == "edit") {
				task_edit_el4.innerText = "Save";
				task_input_el4.removeAttribute("readonly");
				task_input_el4.focus();
			} else {
				task_edit_el4.innerText = "Edit";
				task_input_el4.setAttribute("readonly", "readonly");
			}
		});


		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});


	});
});