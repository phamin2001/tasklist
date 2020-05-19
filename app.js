// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListener();

// Load all event listeners
function loadEventListener() {
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear task event
  clearBtn.addEventListener('click', clearTasks);

  // Filter task event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Crete text node adn append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTasks() {
  // taskList.innerHTML = '';

  // Faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  // querySelectorAll return a node list
  // but if using getElementByClass will reutrn HTML collection
  // which we would have to convert to an array in order to use foreach
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
   });

  // console.log(text);
}
