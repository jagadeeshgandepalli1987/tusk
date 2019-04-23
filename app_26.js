const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = '';

// form.addEventListener(`submit`, runEvent);

// form.addEventListener(`keydown`, runEvent);

//keyup
// form.addEventListener(`keyup`, runEvent);
//keypress
// form.addEventListener(`keypress`, runEvent);
//focus
//  form.addEventListener(`focus`, runEvent);
//blur
//  form.addEventListener(`blur`, runEvent);
//cut
form.addEventListener('cut', runEvent);
//paste
form.addEventListener('paste', runEvent);

select.addEventListener('change',runEvent);


function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;
  // console.log(taskInput.value);
  // e.preventDefault();
}