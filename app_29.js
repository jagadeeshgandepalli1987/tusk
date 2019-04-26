const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listners
loadEventListners();

function loadEventListners(){
  // Add task form
  form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e){
  
  if(taskInput.value === ''){
    alert('Add a task');
  }

  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
//create new link element
  const link = document.createElement('a');
   
  link.className ='delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);

   taskList.appendChild(li);
  // clear input
  taskInput.value = '';
  //Append li to ul
  console.log(li);

  e.preventDefault();
}