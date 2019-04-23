//event bubbling
/*
document.querySelector('.card-title').addEventListener('click',function(){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',function(){
  console.log('card content');
});

document.querySelector('.card').addEventListener('click',function(){
  console.log('card');
});

document.querySelector('.col').addEventListener('click',function(){
  console.log('col');
});
*/
// event deligation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click',deleteItem);

document.body.addEventListener('click',deleteItem);

function deleteItem(e){
  // console.log('delete item');
  // console.log(e.target);
  // if(e.target.className ===  'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
      console.log('delete item');
      e.target.parentElement.parentElement.remove();
    }
} 