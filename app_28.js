// Local and session storage
//set local storage item
// localStorage.setItem('name','Jhon');

// sessionStorage.setItem('name','beth');

// remove from storage
// localStorage.removeItem('name');

//get from storage 
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');


//clear local storage
// localStorage.clear();

// console.log(name,age);

document.querySelector('form').addEventListener('submit',function(e){
  const task = document.getElementById('task').value;
  let tasks;

  if(localStorage.getItem('tasks') == null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // console.log(task);
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved.');

  e.preventDefault();
});



const tasks = localStorage.getItem('tasks');

tasks.forEach(function(){
  console.log(task);
})

