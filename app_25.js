const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click', runEvent);
//double click
// clearBtn.addEventListener('dblclick', runEvent);
//Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
//Mouseup
// clearBtn.addEventListener('mouseup',runEvent);

//mouseenter
//  card.addEventListener('mouseenter', runEvent);

//mouseleave
// card.addEventListener('mouseleave', runEvent);

//mouseout
// card.addEventListener('mouseout', runEvent);

//mousemove
card.addEventListener('mousemove', runEvent);





// Event Handler 
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX}  MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor =`rgb(${e.offsetX},${e.offsetY},40)`;
}