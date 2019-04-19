// if(something){
//   do something
// }else {
//   do something else
// }

const id = 100;

//EQUAL TO
// if(id == 1){
//   console.log('ÇORRECT');
// }else{
//   console.log('INCORRECT');
// }

// //NOT EQUAL to

// if(id != 101){
//   console.log('ÇORRECT');
// }else{
//   console.log('INCORRECT');
// }

// if(id === 101){
//   console.log('ÇORRECT');
// }else{
//   console.log('INCORRECT');
// }

// if(id !== 100){
//   console.log('ÇORRECT');
// }else{
//   console.log('INCORRECT');
// }


// if(typeof id !== 'undefined'){
//   console.log(`the id is ${id}`);
// } else {
//   console.log(`NO ID`);
// }


// if(id >= 200){
  // console.log(`the id is ${id}`);
// } else {
  // console.log(`NO ID`);
// }

// const color = 'red';

// if(color === 'red'){
//   console.log('Color is red');
//   }else if(color === 'blue'){
//     console.log('color is blue');
//   }else {
//     console.log('color is not red and blue');
//   }

const name = 'Steve';
const age = 20;

if(age > 0 && age < 12){
  console.log(`${name} is a child`);
}else if(age >= 13  && age <= 19)
{
  console.log(`${name} is a teenager`);
}else{
  console.log(`${name} is an adult`);
}

if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
}else {
  console.log(`${name} is registered for the race`);
}


//Ternary operation
console.log(id === 100 ? `CORRECT`:`INCORRECT`);