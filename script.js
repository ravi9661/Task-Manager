// script.js

// Get references to HTML elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Event listener for form submission
taskForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    // Get task name and due date from the form
    const taskName = document.getElementById('task').value;
    const dueDate = document.getElementById('due-date').value;

    // Create a new list item element for the task
    const listItem = document.createElement('li');
    listItem.textContent = `${taskName} (Due: ${dueDate})`;

    // Append the new task to the task list
    taskList.appendChild(listItem);

    // Clear the form inputs
    document.getElementById('task').value = '';
    document.getElementById('due-date').value = '';
});