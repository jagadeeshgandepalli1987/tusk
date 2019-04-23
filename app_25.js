const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click', runEvent);
//double click
clearBtn.addEventListener('dblclick', runEvent);

// Event Handler 
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
}