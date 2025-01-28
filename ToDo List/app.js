// app.js

let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false
        };

        tasks.push(task);
        taskInput.value = ''; 
        renderTasks();
    }
};

const toggleTaskCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);
    renderTasks();
};

const renderTasks = () => {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        const taskText = document.createElement('p');
        taskText.textContent = task.text;

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.addEventListener('click', () => toggleTaskCompletion(index));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => deleteTask(index));

        li.append(taskText, completeButton, deleteButton);
        taskList.appendChild(li);
    });
};

document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
