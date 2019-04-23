// document.getElementById()
// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

//change styling
// document.getElementById('task-title').style.background = 'black';
// document.getElementById('task-title').style.color = 'white';
// document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//change content
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// document.getElementById('task-title').innerHTML = 'Hello world!!!';

// const tasktitle = document.getElementById('task-title');

// tasktitle.innerHTML = '<span style="color:red">Task List</span>';

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector("ul li").style.color = 'blue';
document.querySelector('li:last-child').style.color = 'green';
document.querySelector('li:nth-child(3)').style.color = "yellow";
document.querySelector('li:nth-child(4)').textContent = "Hello World!!";
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




