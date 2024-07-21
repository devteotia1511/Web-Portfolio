document.addEventListener('DOMContentLoaded', () => {
    const taskAdderForm = document.querySelector('form');
    const taskInput = document.querySelector('input.additem');
    const taskList = document.querySelector('ul.taskadder');
    const editButton = document.querySelector('button.edit');
    const removeButton = document.querySelector('button.remove');

    let selectedTask = null;

    taskAdderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = taskInput.value.trim();
        if (task !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = task;
            newTask.addEventListener('click', () => {
                if (selectedTask) {
                    selectedTask.style.backgroundColor = '';
                }
                selectedTask = newTask;
                newTask.style.backgroundColor = 'grey';
                taskInput.value = newTask.textContent;
            });
            taskList.appendChild(newTask);
            taskInput.value = '';
        }
    });

    editButton.addEventListener('click', () => {
        if (selectedTask) {
            const editedTask = taskInput.value.trim();
            if (editedTask !== '') {
                selectedTask.textContent = editedTask;
                selectedTask.style.backgroundColor = '';
                selectedTask = null;
                taskInput.value = '';
            }
        }
    });

    removeButton.addEventListener('click', () => {
        if (selectedTask) {
            taskList.removeChild(selectedTask);
            selectedTask = null;
            taskInput.value = '';
        }
    });
});
