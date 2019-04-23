// Replace Element 

// create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node 
newHeading.appendChild(document.createTextNode('Task List'));

// get oldHeading 
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove elements
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//remove list item
lis[0].remove();

list.removeChild(lis[3]);

// classes and attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];
list.classList.add('test');
list.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.getAttribute('href','http://www.google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link;



console.log(val);