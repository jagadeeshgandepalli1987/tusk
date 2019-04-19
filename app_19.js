// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//change styling
document.getElementById('task-title').style.background = 'black';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//change content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title');